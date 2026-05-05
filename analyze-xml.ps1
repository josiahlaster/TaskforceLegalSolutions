$xml = [xml](Get-Content 'taskforcelegalsolutions.WordPress.2026-05-04.xml' -Raw)
$ns = New-Object System.Xml.XmlNamespaceManager($xml.NameTable)
$ns.AddNamespace('wp', 'http://wordpress.org/export/1.2/')
$ns.AddNamespace('content', 'http://purl.org/rss/1.0/modules/content/')
$ns.AddNamespace('excerpt', 'http://wordpress.org/export/1.2/excerpt/')

$items = $xml.SelectNodes('//item', $ns)

Write-Output "=== POST TYPE COUNTS ==="
$typeCounts = @{}
foreach ($item in $items) {
    $typeNode = $item.SelectSingleNode('wp:post_type', $ns)
    if ($typeNode) {
        $type = $typeNode.InnerText
        if (-not $typeCounts.ContainsKey($type)) { $typeCounts[$type] = 0 }
        $typeCounts[$type]++
    }
}
$typeCounts.GetEnumerator() | Sort-Object Value -Descending | ForEach-Object { Write-Output ("{0}: {1}" -f $_.Key, $_.Value) }

Write-Output ""
Write-Output "=== PAGES AND POSTS ==="
foreach ($item in $items) {
    $typeNode = $item.SelectSingleNode('wp:post_type', $ns)
    $statusNode = $item.SelectSingleNode('wp:status', $ns)
    if ($typeNode -and ($typeNode.InnerText -eq 'page' -or $typeNode.InnerText -eq 'post')) {
        $title = $item.SelectSingleNode('title').InnerText
        $status = if ($statusNode) { $statusNode.InnerText } else { '?' }
        $slug = $item.SelectSingleNode('wp:post_name', $ns).InnerText
        $parent = $item.SelectSingleNode('wp:post_parent', $ns).InnerText
        Write-Output ("[{0}] {1} (slug: {2}, parent: {3}, status: {4})" -f $typeNode.InnerText, $title, $slug, $parent, $status)
    }
}

Write-Output ""
Write-Output "=== MENU ITEMS ==="
foreach ($item in $items) {
    $typeNode = $item.SelectSingleNode('wp:post_type', $ns)
    if ($typeNode -and $typeNode.InnerText -eq 'nav_menu_item') {
        $title = $item.SelectSingleNode('title').InnerText
        Write-Output $title
    }
}
