SystemUtil.Run "C:\Program Files (x86)\HPE\Unified Functional Testing\bin\WebDriverHost.exe","www.google.com"

Set oWSO = CreateObject("Scripting.FileSystemObject")

FN = day(now())&month(now())&year(now())&second(time())

oWSO.CreateTextFile "D:\MyFiles\FName_"& FN &".txt",True

Set oWSO = nothing
