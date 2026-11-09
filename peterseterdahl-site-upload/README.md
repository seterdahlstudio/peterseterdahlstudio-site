# peterseterdahl.com

A plain HTML website: five pages, one stylesheet, one small script. You don't need a site builder or a monthly plan.

```
index.html            home page (featured image + short statement)
paintings.html        Paintings gallery
sculptures.html       Sculptures gallery
works-on-paper.html   Works on Paper gallery
about.html            bio, exhibitions, contact
css/style.css         the whole look (colors, font, sizes are at the top)
js/site.js            phone menu + click-to-enlarge viewer
images/               one folder per section
```

Every image in `images/` is a gray or colored placeholder labeled "replace with photo".

---

## 1. Swap in the real artwork

1. **Prepare photos.** Use JPG, about 2000 px on the long side, under ~500 KB each. Name files in lowercase with no spaces, e.g. `blue-field-2024.jpg`.
2. **Put them in the right folder**, e.g. `images/paintings/`.
3. **Edit the gallery page.** In `paintings.html`, each work is one block:

   ```html
   <figure class="work">
     <a class="frame" href="images/paintings/blue-field-2024.jpg"><img src="images/paintings/blue-field-2024.jpg" alt="Blue Field" loading="lazy"></a>
     <figcaption><span class="title">Blue Field</span>, 2024<br><span class="details">Oil on canvas, 36 × 48 in.</span></figcaption>
   </figure>
   ```

   Change both image paths, the title, the year and the details. To add a work, copy a block and paste it where it should appear. To remove one, delete its block. Works show left to right, top to bottom, in the order they're listed.
4. **Home and About.** Replace `images/home/featured.jpg` and `images/about/portrait.jpg` (keep those filenames, or change the paths in the HTML). Then edit the text in `index.html` and `about.html`.
5. **Contact links.** In `about.html`, set the real email and Instagram URL. If there's a CV, save it as `cv.pdf` next to `index.html`. If there isn't one, delete that link.
6. **Share image.** `images/share.jpg` (1200 × 630) is the picture that shows when someone texts or emails a link to the site. Replace it with a crop of a strong work.

To preview, open `index.html` in a browser by double-clicking it.

---

## 2. Get the domain

Buy **peterseterdahl.com** from a registrar. Cloudflare, Porkbun and Namecheap are all fine. A `.com` costs about $10–11 a year at Cloudflare. Check that the domain is available when you search for it there.

---

## 3. Put the site online (free, GitHub Pages)

1. Make a free account at github.com.
2. Create a new **public** repository called `peterseterdahl-site`.
3. Click **"uploading an existing file"**, drag in *everything inside* this folder (not the folder itself), and click **Commit changes**.
4. Go to **Settings → Pages**. Under "Build and deployment", choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**. After about a minute the site is live at `https://<username>.github.io/peterseterdahl-site/`.
5. Still in Settings → Pages, type `peterseterdahl.com` under **Custom domain** and click **Save**.
6. At your domain registrar, open the DNS settings and add:

   | Type  | Name | Value |
   |-------|------|-------|
   | A     | @    | 185.199.108.153 |
   | A     | @    | 185.199.109.153 |
   | A     | @    | 185.199.110.153 |
   | A     | @    | 185.199.111.153 |
   | CNAME | www  | `<username>.github.io` |

   If the domain is at Cloudflare, set these records to **DNS only** (gray cloud), not Proxied.
7. Once GitHub shows the domain as verified (minutes to a few hours), tick **Enforce HTTPS**.

**Updating later:** in the repository, click a file, then the pencil icon, edit it and commit. To add photos, use **Add file → Upload files** inside `images/paintings/` (or another section folder). The live site updates within a minute. GitHub keeps every past version, so any change can be undone.

**Simpler option:** at app.netlify.com/drop, drag this folder onto the page to get a live link right away. Then connect the domain under **Domain management**. To update the site, drag the folder in again.
