var page = new ABC({
    "type": "blank", //Blank, blob, or overwrite
    "url": "https://example.com" //Any url
})
page.setType("blank")
page.setUrl("https://historicalanime.org/")
console.log(page.getCode())
page.open()
