$xml = [xml](Get-Content 'taskforcelegalsolutions.WordPress.2026-05-04.xml' -Raw)
$ns = New-Object System.Xml.XmlNamespaceManager($xml.NameTable)
$ns.AddNamespace('wp', 'http://wordpress.org/export/1.2/')
$ns.AddNamespace('content', 'http://purl.org/rss/1.0/modules/content/')

$items = $xml.SelectNodes('//item', $ns)

New-Item -ItemType Directory -Path "extracted" -Force | Out-Null

foreach ($item in $items) {
    $typeNode = $item.SelectSingleNode('wp:post_type', $ns)
    $statusNode = $item.SelectSingleNode('wp:status', $ns)
    if ($typeNode -and $typeNode.InnerText -eq 'page' -and $statusNode.InnerText -eq 'publish') {
        $title = $item.SelectSingleNode('title').InnerText
        $slug = $item.SelectSingleNode('wp:post_name', $ns).InnerText
        $contentNode = $item.SelectSingleNode('content:encoded', $ns)
        $content = if ($contentNode) { $contentNode.InnerText } else { '' }
        
        $fname = if ($slug) { $slug } else { "page-$title" }
        $fname = $fname -replace '[^\w\-]', '_'
        
        $output = "TITLE: $title`nSLUG: $slug`n`n=== CONTENT ===`n$content"
        Set-Content -Path "extracted/$fname.txt" -Value $output -Encoding UTF8
        Write-Output "Extracted: $fname ($($content.Length) chars)"
    }
}
