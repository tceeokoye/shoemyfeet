$root = 'src'
$files = Get-ChildItem -Path $root -Recurse -Include *.tsx,*.ts | Where-Object {
    (Get-Content $_.FullName -Raw) -match 'royal-blue|#2563eb|#1e40af|#1a3a6b|#0f2b5c|#1d4ed8|#3b82f6|#38bdf8|bg-blue-|text-blue-|border-blue-|from-blue-|to-blue-|via-blue-|bg-sky-|text-sky-'
}

$count = 0
foreach ($f in $files) {
    $c = Get-Content $f.FullName -Raw
    $orig = $c

    # bg section replacements (hex)
    $c = $c -replace 'bg-\[#2563eb\]', 'bg-[#09090b]'
    $c = $c -replace 'bg-\[#1e40af\]', 'bg-[#09090b]'
    $c = $c -replace 'bg-\[#1d4ed8\]', 'bg-[#09090b]'
    $c = $c -replace 'bg-\[#0f2b5c\]', 'bg-[#09090b]'
    $c = $c -replace 'bg-\[#1a3a6b\]', 'bg-[#09090b]'
    $c = $c -replace 'bg-royal-blue', 'bg-[#09090b]'

    # bg blue scale
    $c = $c -replace 'bg-blue-900', 'bg-[#09090b]'
    $c = $c -replace 'bg-blue-800', 'bg-[#09090b]'
    $c = $c -replace 'bg-blue-700', 'bg-black'
    $c = $c -replace 'bg-blue-600', 'bg-black'
    $c = $c -replace 'bg-blue-500', 'bg-black'
    $c = $c -replace 'bg-blue-400', 'bg-slate-800'
    $c = $c -replace 'bg-blue-300', 'bg-slate-300'
    $c = $c -replace 'bg-blue-200', 'bg-slate-200'
    $c = $c -replace 'bg-blue-100', 'bg-orange-100'
    $c = $c -replace 'bg-blue-50', 'bg-slate-50'

    # text hex
    $c = $c -replace 'text-royal-blue', 'text-[#f97316]'
    $c = $c -replace 'text-\[#2563eb\]', 'text-[#f97316]'
    $c = $c -replace 'text-\[#1e40af\]', 'text-[#0a0a0a]'

    # text blue scale
    $c = $c -replace 'text-blue-900', 'text-[#0a0a0a]'
    $c = $c -replace 'text-blue-800', 'text-[#0a0a0a]'
    $c = $c -replace 'text-blue-700', 'text-[#0a0a0a]'
    $c = $c -replace 'text-blue-600', 'text-[#f97316]'
    $c = $c -replace 'text-blue-500', 'text-[#f97316]'
    $c = $c -replace 'text-blue-400', 'text-orange-400'
    $c = $c -replace 'text-blue-300', 'text-orange-300'
    $c = $c -replace 'text-blue-200', 'text-neutral-300'
    $c = $c -replace 'text-blue-100', 'text-neutral-200'
    $c = $c -replace 'text-blue-50', 'text-neutral-100'

    # border replacements
    $c = $c -replace 'border-blue-900', 'border-slate-900'
    $c = $c -replace 'border-blue-800', 'border-slate-800'
    $c = $c -replace 'border-blue-700', 'border-slate-700'
    $c = $c -replace 'border-blue-600', 'border-slate-300'
    $c = $c -replace 'border-blue-500', 'border-slate-300'
    $c = $c -replace 'border-blue-400', 'border-slate-300'
    $c = $c -replace 'border-blue-300', 'border-slate-200'
    $c = $c -replace 'border-blue-200', 'border-slate-200'
    $c = $c -replace 'border-blue-100', 'border-slate-100'
    $c = $c -replace 'border-\[#2563eb\]', 'border-[#09090b]'
    $c = $c -replace 'border-\[#1e40af\]', 'border-[#09090b]'
    $c = $c -replace 'border-royal-blue', 'border-[#09090b]'

    # hover
    $c = $c -replace 'hover:bg-\[#2563eb\]', 'hover:bg-black'
    $c = $c -replace 'hover:bg-\[#1e40af\]', 'hover:bg-black'
    $c = $c -replace 'hover:bg-royal-blue', 'hover:bg-black'
    $c = $c -replace 'hover:bg-blue-900', 'hover:bg-black'
    $c = $c -replace 'hover:bg-blue-800', 'hover:bg-black'
    $c = $c -replace 'hover:bg-blue-700', 'hover:bg-black'
    $c = $c -replace 'hover:bg-blue-600', 'hover:bg-black'
    $c = $c -replace 'hover:bg-blue-500', 'hover:bg-black'
    $c = $c -replace 'hover:bg-blue-400', 'hover:bg-slate-800'
    $c = $c -replace 'hover:bg-blue-100', 'hover:bg-orange-100'
    $c = $c -replace 'hover:bg-blue-50', 'hover:bg-slate-50'
    $c = $c -replace 'hover:text-blue-\d+', 'hover:text-[#f97316]'
    $c = $c -replace 'hover:text-royal-blue', 'hover:text-[#f97316]'
    $c = $c -replace 'hover:border-blue-\d+', 'hover:border-[#09090b]'

    # focus ring
    $c = $c -replace 'focus:ring-blue-\d+', 'focus:ring-orange-400'
    $c = $c -replace 'ring-blue-\d+', 'ring-orange-400'

    # gradient from
    $c = $c -replace 'from-blue-900', 'from-[#09090b]'
    $c = $c -replace 'from-blue-800', 'from-[#09090b]'
    $c = $c -replace 'from-blue-700', 'from-black'
    $c = $c -replace 'from-blue-600', 'from-black'
    $c = $c -replace 'from-blue-500', 'from-black'
    $c = $c -replace 'from-blue-400', 'from-slate-700'
    $c = $c -replace 'from-blue-300', 'from-slate-500'
    $c = $c -replace 'from-blue-200', 'from-slate-200'
    $c = $c -replace 'from-blue-100', 'from-slate-100'
    $c = $c -replace 'from-blue-50', 'from-slate-50'
    $c = $c -replace 'from-\[#2563eb\]', 'from-[#09090b]'
    $c = $c -replace 'from-\[#1e40af\]', 'from-[#09090b]'
    $c = $c -replace 'from-\[#1a3a6b\]', 'from-[#09090b]'

    # gradient to
    $c = $c -replace 'to-blue-900', 'to-[#09090b]'
    $c = $c -replace 'to-blue-800', 'to-[#09090b]'
    $c = $c -replace 'to-blue-700', 'to-black'
    $c = $c -replace 'to-blue-600', 'to-black'
    $c = $c -replace 'to-blue-500', 'to-black'
    $c = $c -replace 'to-blue-400', 'to-slate-700'
    $c = $c -replace 'to-blue-300', 'to-slate-500'
    $c = $c -replace 'to-blue-200', 'to-slate-200'
    $c = $c -replace 'to-blue-100', 'to-slate-100'
    $c = $c -replace 'to-blue-50', 'to-slate-50'
    $c = $c -replace 'to-\[#2563eb\]', 'to-[#09090b]'
    $c = $c -replace 'to-\[#1e40af\]', 'to-[#09090b]'
    $c = $c -replace 'to-\[#1a3a6b\]', 'to-[#09090b]'

    # gradient via
    $c = $c -replace 'via-blue-900', 'via-[#09090b]'
    $c = $c -replace 'via-blue-800', 'via-[#09090b]'
    $c = $c -replace 'via-blue-700', 'via-black'
    $c = $c -replace 'via-blue-600', 'via-black'
    $c = $c -replace 'via-blue-500', 'via-black'

    # sky
    $c = $c -replace 'bg-sky-\d+', 'bg-slate-100'
    $c = $c -replace 'text-sky-\d+', 'text-[#f97316]'
    $c = $c -replace 'border-sky-\d+', 'border-slate-200'
    $c = $c -replace 'from-sky-\d+', 'from-slate-200'
    $c = $c -replace 'to-sky-\d+', 'to-slate-100'

    # raw hex in strings/styles
    $c = $c -replace '#2563eb', '#f97316'
    $c = $c -replace '#1e40af', '#09090b'
    $c = $c -replace '#1a3a6b', '#09090b'
    $c = $c -replace '#0f2b5c', '#09090b'
    $c = $c -replace '#1d4ed8', '#09090b'
    $c = $c -replace '#3b82f6', '#f97316'
    $c = $c -replace '#38bdf8', '#f97316'
    $c = $c -replace '#60a5fa', '#f97316'
    $c = $c -replace '#93c5fd', '#fdba74'

    if ($c -ne $orig) {
        Set-Content $f.FullName -Value $c -NoNewline
        $count++
        Write-Host "Updated: $($f.Name)"
    }
}
Write-Host "Done. Updated $count files."
