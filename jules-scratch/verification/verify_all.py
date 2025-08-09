from playwright.sync_api import sync_playwright, expect

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Verify landing page
        page.goto("http://localhost:5173/landing")
        expect(page.get_by_role("heading", name="Welcome to Savage Nation USA")).to_be_visible()
        page.screenshot(path="jules-scratch/verification/01_landing_page.png")

        # Verify image admin page
        page.goto("http://localhost:5173/image-admin")
        expect(page.get_by_role("heading", name="Image Management")).to_be_visible()
        page.screenshot(path="jules-scratch/verification/02_image_admin_page.png")

        # Verify blog admin page
        page.goto("http://localhost:5173/blog-admin")
        expect(page.get_by_role("heading", name="Blog Admin")).to_be_visible()
        page.screenshot(path="jules-scratch/verification/03_blog_admin_page.png")

        # Verify product admin page
        page.goto("http://localhost:5173/product-admin")
        expect(page.get_by_role("heading", name="Manage Products")).to_be_visible()
        page.screenshot(path="jules-scratch/verification/04_product_admin_page.png")

        browser.close()

run()
