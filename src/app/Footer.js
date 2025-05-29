"use client"
export default function Footer() {
    return (
        <>
            <div className="footer">
                {/* این div در سمت چپ و پایین قرار می‌گیرد */}
                <div className="text-left">Rush box</div>

                {/* این div شامل ستون‌های لینک در سمت راست و بالا است */}
                <div className="text-right">
                    {/* ستون Mailer */}
                    <div className="link-column">
                        <span className="head-link">Mailer</span>
                        <ul>
                            <li><a href="#">MailerBox</a></li>
                            <li><a href="#">Shipper Box</a></li>
                            <li><a href="#">Folded Box</a></li>
                        </ul>
                    </div>

                    {/* ستون Rigged Box */}
                    <div className="link-column">
                        <span className="head-link">Rigged Box</span>
                        <ul>
                            <li><a href="#">Gift Box</a></li>
                            <li><a href="#">setup Box</a></li>
                            <li><a href="#">Custom Box</a></li>
                        </ul>
                    </div>

                    {/* ستون Product Box */}
                    <div className="link-column">
                        <span className="head-link">Product Box</span>
                        <ul>
                            <li><a href="#">Cardstock Box</a></li>
                            <li><a href="#">Corrugated Box</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .footer {
                    width: 100%;
                    max-width: 1750px; /* حداکثر عرض کلی فوتر */
                    margin: auto; /* برای وسط قرار گرفتن */
                    display: flex;
                    justify-content: space-between; /* Rush box در یک طرف، لینک‌ها در طرف دیگر */
                    align-items: flex-end; /* تراز کردن آیتم‌ها به پایین */
                    padding: 20px; /* پدینگ کلی فوتر */
                    padding-top: 100px; /* پدینگ از بالا (ممکن است نیاز به تنظیم بیشتر داشته باشد) */
                    padding-bottom: 50px; /* پدینگ از پایین */
                    background-color: white; /* پس‌زمینه سفید */
                }

                .text-left {
                    font-size: 7rem; /* اندازه فونت بزرگ */
                    font-family: system-ui;
                    color: rgb(228, 228, 228); /* رنگ خاکستری روشن */
                    font-weight: 600;
                    text-align: left; /* تراز به چپ */
                    line-height: 1; /* حذف فضای اضافی بالا و پایین متن */
                    /* margin-bottom: -15px; /* تنظیم دقیق برای قرار گرفتن در پایین (ممکن است نیاز به تنظیم دستی داشته باشد) */
                }

                .text-right {
                    display: flex;
                    gap: 60px; /* فاصله بین ستون‌های لینک */
                    align-items: flex-start; /* تراز کردن ستون‌ها به بالا */
                }

                .link-column {
                    display: flex;
                    flex-direction: column; /* آیتم‌ها زیر هم قرار می‌گیرند */
                    align-items: flex-start; /* آیتم‌ها از چپ تراز می‌شوند */
                }

                .head-link { /* قبلا #head-link بود، بهتر است از کلاس استفاده شود */
                    color: #D2D5DB; /* رنگ خاکستری روشن برای عنوان‌ها */
                    font-size: 16px;
                    font-weight: bold; /* برای برجسته‌تر شدن عنوان */
                    margin-bottom: 15px; /* فاصله بین عنوان و اولین لینک */
                    display: block; /* برای اینکه span یک خط جداگانه باشد */
                }

                .link-column ul {
                    list-style: none; /* حذف دایره یا مربع پیش‌فرض لیست */
                    padding: 0; /* حذف padding پیش‌فرض لیست */
                    margin: 0; /* حذف margin پیش‌فرض لیست */
                }

                .link-column li {
                    font-size: 14px; /* اندازه فونت برای لینک‌ها */
                    color: #111111; /* رنگ مشکی برای لینک‌ها */
                    line-height: 1.5; /* فاصله بین آیتم‌های لیست */
                    margin-bottom: 5px; /* فاصله بین هر لینک */
                }

                .link-column a {
                    text-decoration: none; /* حذف زیرخط پیش‌فرض لینک */
                    cursor: pointer;
                
                    
                        color: #111111; /* مثال: تغییر رنگ هنگام هاور */
                    }
                }
            `}</style>
        </>
    );
}