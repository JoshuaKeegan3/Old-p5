import pyautogui as pag
import time
import webbrowser

url = 'file:///C:/Users/Josh/Documents/Codin/Java/p5/12%20-%20Follow%20Cirlces/template.html'

webbrowser.open(url)

pag.FAILSAFE = True
time.sleep(0.1)
pag.press('f11')
#img = pag.screenshot()
#pag.moveTo(pag.locateCenterOnScreen(img))
#pag.moveTo(pag.center(pag.windowSize()))


while not pag.pixelMatchesColor(pag.position().x,pag.position().y,(255,0,0)):
    pass
import pyautogui as pag
import time

pag.FAILSAFE = False
pag.press('win')
time.sleep(0.2)
pag.click((101,615))
time.sleep(0.2)
pag.doubleClick((142, 528))



