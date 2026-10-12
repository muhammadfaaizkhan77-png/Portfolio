const menu = document.getElementById("menu");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a");

function setMenuState(isOpen) {
    navbar.classList.toggle("active", isOpen);
    menu.classList.toggle("active", isOpen);
    menu.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark" aria-hidden="true"></i>'
        : '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
    menu.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    menu.setAttribute("aria-expanded", String(isOpen));
}

menu.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    setMenuState(!navbar.classList.contains("active"));
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
});

document.addEventListener("click", (event) => {
    if (navbar.classList.contains("active") && !navbar.contains(event.target) && !menu.contains(event.target)) {
        setMenuState(false);
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 1000 && navbar.classList.contains("active")) {
        setMenuState(false);
    }
});

setMenuState(false);
document.querySelector(".copyright").textContent = `© ${new Date().getFullYear()} Muhammad Faaiz Khan. All Rights Reserved.`;


/* Worldwide country calling-code selector */
(() => {
    const countrySelect = document.getElementById('countryCode');
    if (!countrySelect) return;

    const countries = [
        ['Afghanistan','+93'],['Albania','+355'],['Algeria','+213'],['American Samoa','+1 684'],['Andorra','+376'],['Angola','+244'],['Anguilla','+1 264'],['Antarctica','+672'],['Antigua and Barbuda','+1 268'],['Argentina','+54'],['Armenia','+374'],['Aruba','+297'],['Ascension Island','+247'],['Australia','+61'],['Austria','+43'],['Azerbaijan','+994'],
        ['Bahamas','+1 242'],['Bahrain','+973'],['Bangladesh','+880'],['Barbados','+1 246'],['Belarus','+375'],['Belgium','+32'],['Belize','+501'],['Benin','+229'],['Bermuda','+1 441'],['Bhutan','+975'],['Bolivia','+591'],['Bonaire, Sint Eustatius and Saba','+599'],['Bosnia and Herzegovina','+387'],['Botswana','+267'],['Brazil','+55'],['British Indian Ocean Territory','+246'],['British Virgin Islands','+1 284'],['Brunei','+673'],['Bulgaria','+359'],['Burkina Faso','+226'],['Burundi','+257'],
        ['Cabo Verde','+238'],['Cambodia','+855'],['Cameroon','+237'],['Canada','+1'],['Cayman Islands','+1 345'],['Central African Republic','+236'],['Chad','+235'],['Chile','+56'],['China','+86'],['Christmas Island','+61'],['Cocos (Keeling) Islands','+61'],['Colombia','+57'],['Comoros','+269'],['Congo','+242'],['Cook Islands','+682'],['Costa Rica','+506'],['Côte d’Ivoire','+225'],['Croatia','+385'],['Cuba','+53'],['Curaçao','+599'],['Cyprus','+357'],['Czechia','+420'],
        ['Democratic Republic of the Congo','+243'],['Denmark','+45'],['Djibouti','+253'],['Dominica','+1 767'],['Dominican Republic','+1 809'],['Dominican Republic','+1 829'],['Dominican Republic','+1 849'],
        ['Ecuador','+593'],['Egypt','+20'],['El Salvador','+503'],['Equatorial Guinea','+240'],['Eritrea','+291'],['Estonia','+372'],['Eswatini','+268'],['Ethiopia','+251'],
        ['Falkland Islands','+500'],['Faroe Islands','+298'],['Fiji','+679'],['Finland','+358'],['France','+33'],['French Guiana','+594'],['French Polynesia','+689'],['French Southern Territories','+262'],
        ['Gabon','+241'],['Gambia','+220'],['Georgia','+995'],['Germany','+49'],['Ghana','+233'],['Gibraltar','+350'],['Greece','+30'],['Greenland','+299'],['Grenada','+1 473'],['Guadeloupe','+590'],['Guam','+1 671'],['Guatemala','+502'],['Guernsey','+44 1481'],['Guinea','+224'],['Guinea-Bissau','+245'],['Guyana','+592'],
        ['Haiti','+509'],['Honduras','+504'],['Hong Kong','+852'],['Hungary','+36'],
        ['Iceland','+354'],['India','+91'],['Indonesia','+62'],['Iran','+98'],['Iraq','+964'],['Ireland','+353'],['Isle of Man','+44 1624'],['Israel','+972'],['Italy','+39'],
        ['Jamaica','+1 876'],['Japan','+81'],['Jersey','+44 1534'],['Jordan','+962'],
        ['Kazakhstan','+7'],['Kenya','+254'],['Kiribati','+686'],['Kosovo','+383'],['Kuwait','+965'],['Kyrgyzstan','+996'],
        ['Laos','+856'],['Latvia','+371'],['Lebanon','+961'],['Lesotho','+266'],['Liberia','+231'],['Libya','+218'],['Liechtenstein','+423'],['Lithuania','+370'],['Luxembourg','+352'],
        ['Macao','+853'],['Madagascar','+261'],['Malawi','+265'],['Malaysia','+60'],['Maldives','+960'],['Mali','+223'],['Malta','+356'],['Marshall Islands','+692'],['Martinique','+596'],['Mauritania','+222'],['Mauritius','+230'],['Mayotte','+262'],['Mexico','+52'],['Micronesia','+691'],['Moldova','+373'],['Monaco','+377'],['Mongolia','+976'],['Montenegro','+382'],['Montserrat','+1 664'],['Morocco','+212'],['Mozambique','+258'],['Myanmar','+95'],
        ['Namibia','+264'],['Nauru','+674'],['Nepal','+977'],['Netherlands','+31'],['New Caledonia','+687'],['New Zealand','+64'],['Nicaragua','+505'],['Niger','+227'],['Nigeria','+234'],['Niue','+683'],['Norfolk Island','+672'],['North Korea','+850'],['North Macedonia','+389'],['Northern Mariana Islands','+1 670'],['Norway','+47'],
        ['Oman','+968'],
        ['Pakistan','+92'],['Palau','+680'],['Palestine','+970'],['Panama','+507'],['Papua New Guinea','+675'],['Paraguay','+595'],['Peru','+51'],['Philippines','+63'],['Pitcairn Islands','+64'],['Poland','+48'],['Portugal','+351'],['Puerto Rico','+1 787'],['Puerto Rico','+1 939'],
        ['Qatar','+974'],
        ['Réunion','+262'],['Romania','+40'],['Russia','+7'],['Rwanda','+250'],
        ['Saint Barthélemy','+590'],['Saint Helena','+290'],['Saint Kitts and Nevis','+1 869'],['Saint Lucia','+1 758'],['Saint Martin','+590'],['Saint Pierre and Miquelon','+508'],['Saint Vincent and the Grenadines','+1 784'],['Samoa','+685'],['San Marino','+378'],['São Tomé and Príncipe','+239'],['Saudi Arabia','+966'],['Senegal','+221'],['Serbia','+381'],['Seychelles','+248'],['Sierra Leone','+232'],['Singapore','+65'],['Sint Maarten','+1 721'],['Slovakia','+421'],['Slovenia','+386'],['Solomon Islands','+677'],['Somalia','+252'],['South Africa','+27'],['South Georgia and the South Sandwich Islands','+500'],['South Korea','+82'],['South Sudan','+211'],['Spain','+34'],['Sri Lanka','+94'],['Sudan','+249'],['Suriname','+597'],['Svalbard and Jan Mayen','+47'],['Sweden','+46'],['Switzerland','+41'],['Syria','+963'],
        ['Taiwan','+886'],['Tajikistan','+992'],['Tanzania','+255'],['Thailand','+66'],['Timor-Leste','+670'],['Togo','+228'],['Tokelau','+690'],['Tonga','+676'],['Trinidad and Tobago','+1 868'],['Tristan da Cunha','+290'],['Tunisia','+216'],['Turkey','+90'],['Turkmenistan','+993'],['Turks and Caicos Islands','+1 649'],['Tuvalu','+688'],
        ['Uganda','+256'],['Ukraine','+380'],['United Arab Emirates','+971'],['United Kingdom','+44'],['United States','+1'],['United States Virgin Islands','+1 340'],['Uruguay','+598'],['Uzbekistan','+998'],
        ['Vanuatu','+678'],['Vatican City','+39'],['Venezuela','+58'],['Vietnam','+84'],
        ['Wallis and Futuna','+681'],['Western Sahara','+212'],
        ['Yemen','+967'],
        ['Zambia','+260'],['Zimbabwe','+263']
    ];

    const selectedCode = countrySelect.value;
    countrySelect.innerHTML = '';

    countries.forEach(([country, code]) => {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = code;
        if (country === 'Pakistan' && code === selectedCode) option.selected = true;
        countrySelect.appendChild(option);
    });
})();


/* Portfolio loading screen */
(() => {
    const loader = document.getElementById("portfolioLoader");

    if (!loader) return;

    document.body.classList.add("loading");

    const hideLoader = () => {
        loader.classList.add("loaded");
        document.body.classList.remove("loading");

        setTimeout(() => {
            loader.remove();
        }, 700);
    };

    // Wait until the portfolio and its images are ready.
    const minimumDisplayTime = new Promise(resolve => setTimeout(resolve, 1500));
    const pageReady = document.readyState === "complete"
        ? Promise.resolve()
        : new Promise(resolve => window.addEventListener("load", resolve, { once: true }));

    Promise.all([minimumDisplayTime, pageReady]).then(hideLoader);

    // Safety fallback so the portfolio never remains stuck on the loader.
    setTimeout(hideLoader, 5000);
})();


/* Section Fade-In / Fade-Out navigation animation */
(() => {
    const sections = document.querySelectorAll('section[id]');
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!sections.length || reduceMotion) return;

    sections.forEach(section => section.classList.add('section-transition'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('section-fade-out');
                entry.target.classList.add('section-visible');
            } else {
                entry.target.classList.remove('section-visible');
                entry.target.classList.add('section-fade-out');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '-8% 0px -8% 0px'
    });

    sections.forEach(section => observer.observe(section));

    internalLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href || href === '#' || !href.startsWith('#')) return;

        const target = document.querySelector(href);
        if (!target || !target.matches('section[id]')) return;

        link.addEventListener('click', (event) => {
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

            const current = Array.from(sections).find(section => {
                const rect = section.getBoundingClientRect();
                return rect.top <= window.innerHeight * 0.35 && rect.bottom >= window.innerHeight * 0.35;
            });

            if (current === target) return;

            event.preventDefault();

            if (current) {
                current.classList.remove('section-visible');
                current.classList.add('section-fade-out');
            }

            setTimeout(() => {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 180);

            setTimeout(() => {
                target.classList.remove('section-fade-out');
                target.classList.add('section-visible');
            }, 420);

            history.pushState(null, '', href);
        });
    });
})();

// Auto-expand contact message textarea based on typed content
(function () {
    const messageField = document.querySelector('.input-group-2 textarea[name="message"]');
    if (!messageField) return;

    function autoResize() {
        messageField.style.height = 'auto';
        messageField.style.height = messageField.scrollHeight + 'px';
    }

    messageField.addEventListener('input', autoResize);
    autoResize();
})();


/* Home heading typewriter animation: type -> pause -> delete -> next phrase -> repeat */
(() => {
    const typingText = document.getElementById('typing-text');
    if (!typingText) return;

    const phrases = ['I Build Websites', '& Web Applications'];
    const typeSpeed = 90;
    const deleteSpeed = 55;
    const holdTime = 1600;
    const switchDelay = 350;
    let phraseIndex = 0;

    const typePhrase = (text, callback) => {
        let i = 0;
        typingText.textContent = '';
        const timer = setInterval(() => {
            typingText.textContent = text.slice(0, ++i);
            if (i >= text.length) {
                clearInterval(timer);
                setTimeout(callback, holdTime);
            }
        }, typeSpeed);
    };

    const deletePhrase = (text, callback) => {
        let i = text.length;
        const timer = setInterval(() => {
            typingText.textContent = text.slice(0, --i);
            if (i <= 0) {
                clearInterval(timer);
                setTimeout(callback, switchDelay);
            }
        }, deleteSpeed);
    };

    const loop = () => {
        const currentPhrase = phrases[phraseIndex];
        typePhrase(currentPhrase, () => {
            deletePhrase(currentPhrase, () => {
                phraseIndex = (phraseIndex + 1) % phrases.length;
                loop();
            });
        });
    };

    loop();
})();
