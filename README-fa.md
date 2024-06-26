[![App Screenshot](https://raw.githubusercontent.com/meysam-gheitasi/pure-js-app/main/images/pure-js-app-hero.png)](https://meysam-gheitasi.github.io/pure-js-app/)

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

# وب‌ سایت جاوااسکریپتی

در این پروژه، تقریباً تمام مهارت‌های لازم برای تسلط بر جاوااسکریپت به صورت یک فروشگاه به همراه بخش مدیریت مصحولات پیاده‌سازی شده است.

### 📋 فهرست مطالب

1. 🤖 [مقدمه](#-مقدمه)
2. ⚙️ [فناوری‌های مورد استفاده](#%EF%B8%8F-فناوریهای-مورد-استفاده)
3. 🔋 [ویژگی‌ها](#-ویژگیها)
4. 🤸 [پیش نمایش و شروع سریع](#-پیش-نمایش-و-شروع-سریع)
5. 🚀 [بیشتر](#)

### 🤖 مقدمه

این پروژه شامل سه بخش است: صفحه‌ای برای مدیر به منظور ایجاد و ویرایش و نمایش محصولات به صورت مرتب شده.
برای هر محصول بر اساس شناسه آن، صفحه‌ای اختصاصی در دسترس است که برای ویرایش اطلاعات با امکان نمایش آخرین زمان ویرایش استفاده می شود و در نهایت صفحه‌ای برای نمایش تمام محصولات فروشگاه به همراه امکان افزودن و مدیریت محصولات در سبد خرید برای کاربر نهایی ایجاد شده است.

### ⚙️ فناوری‌های مورد استفاده

1. جاوااسکریپت.
2. CSS  متغیرهای محلی در.
3. ستون‌ها در Bootstrap.
4. استفاده از بسته moment به عنوان فایل CDN برای داشتن تاریخ ایجاد و ویرایش محصولات.
5. استفاده از بسته jalali-moment به عنوان فایل CDN برای داشتن تاریخ لحظه‌ای.
6. استفاده از بسته uuid.js به عنوان فایل CDN برای ثبت شناسه محصول.
7. استفاده از فونت‌ها در پروژه.

### 🔋 ویژگی‌ها

:point_left: در صفحه مدیریت:

1. تولید محصول با ویژگی‌های شناسه منحصر به‌ فرد و تاریخ تولید.
2. نمایش محصولات ایجاد شده توسط عناصر ساخته شده با JS.
3. مرتب‌سازی محصولات ایجاد شده در دو حالت، زمان ایجاد و زمان ویرایش محصولات.
4. جستجوی حرف به حرف در میان نام محصولات.
5. وجود دکمه حذف، اعلام موجودی برای هر محصول.
6. ذخیره تمام تغییرات در حافظه محلی مرورگر کاربر.
7. لینک کردن نام هر محصول به صفحه مخصوص خود با استفاده از شناسه.

:point_left: در صفحه اختصاصی ویرایش محصول:

1. نمایش اطلاعات محصول با گرفتن شناسه محصول از URL صفحه ایجاد شده یا هدایت کاربر به صفحه مدیریت در صورت وجود URL نامعتبر.
2. نمایش اطلاعات محصول در عناصر از پیش ساخته شده در فایل HTML.
3. امکان ویرایش و ذخیره تمام اطلاعات محصول به صورت آنی بدون نیاز به فشار دادن دکمه ذخیره اطلاعات.
4. نمایش زمان آخرین ویرایش محصول به صورت آنی.

:point_left: در صفحه فروشگاه:

1. دریافت محصولات از حافظه محلی و نمایش تمام محصولاتی که به عنوان موجود اعلام شده‌اند همراه با عکس پیش‌فرض. در دو حالت نمایش: حالت مرورگر در ۲ ستون و حالت موبایل در ۱ ستون.
2. عناصر استاتیک و داده‌های داینامیک نمایش محصول، مانند کامپوننت‌های واکنش‌گرا، به یک عنصر div ایجاد شده به صورت inner HTML اضافه می‌شوند و در نهایت به یک عنصر چاپ در فایل HTML اضافه می‌شوند.
3. با انتخاب هر محصول، به سبد خرید اضافه می‌شود و با انتخاب چندباره از هر محصول، فقط تعداد آن محصول در سبد خرید افزایش می‌یابد.
4. نمایش تعداد محصولات در سبد خرید روی آیکون سبد خرید در صفحه فروشگاه.
5. اطلاعات سبد خرید در حافظه محلی ذخیره می‌شود.
6. با کلیک بر روی آیکون سبد خرید، امکان نمایش و ویرایش تعداد و حذف تکی یا تمام محصولات موجود در سبد فراهم می‌شود.

### 🤸 پیش نمایش و شروع سریع

اجرای نسخه نمایشی وب‌سایت 

#### [www.pure-js-app.html](https://meysam-gheitasi.github.io/pure-js-app/pages/shop.html)

کلون کردن ریپازیتوری

```bash
  git clone https://github.com/meysam-gheitasi/purejs-app.git
  cd purejs-app
```

### 🚀 بیشتر

- به زودی قرار میگیرد
