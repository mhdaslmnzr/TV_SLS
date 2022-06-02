from selenium import webdriver
from selenium.webdriver.chrome.options import Options    

chrome_options = Options()
chrome_options.add_experimental_option("useAutomationExtension", False)
chrome_options.add_experimental_option("excludeSwitches", ["enable-automation"])
chrome_options.add_argument("--start-fullscreen");
chrome_options.add_argument("--kiosk");

driver = webdriver.Chrome(executable_path=(r"C:\Users\aslam\Desktop\sls tv\TV_SLS\Screen 1"),
                          chrome_options=chrome_options)
driver.get('https://www.google.com')

