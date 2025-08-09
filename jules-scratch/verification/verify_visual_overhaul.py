from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:5173/landing")
        page.wait_for_timeout(10000) # wait for 10 seconds
        page.screenshot(path="jules-scratch/verification/verification.png")
        browser.close()

run()
