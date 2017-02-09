from SimpleCV import Color, Camera
import urllib2
import time

cam = Camera()
def bildirim(QRGelen):
    print (QRGelen)
    urllib2.urlopen("http://192.168.1.31:1907/?value="+QRGelen).read()
while (1):
    img = cam.getImage()
    barcode = img.findBarcode()
    if (barcode is not None):
        barcode = barcode[0]
        result = str(barcode.data)
        print result
        bildirim(result)
        barcode = []
