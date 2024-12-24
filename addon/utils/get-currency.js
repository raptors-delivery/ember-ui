const currencies = [
    {
        iso2: 'AW',
        name: 'Aruba',
        emoji: '🇦🇼',
        code: 'AWG',
        title: 'Aruban Guilder',
        symbol: 'Afl. ',
        precision: 2,
        thousandSeparator: '.',
        decimalSeparator: ',',
        symbolPlacement: 'before',
    },
    {
        iso2: 'AI',
        name: 'Anguilla',
        emoji: '🇦🇮',
        code: 'XCD',
        title: 'East Caribbean Dollar',
        symbol: 'EC$',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'SN',
        name: 'West African Economic and Monetary Union',
        emoji: '🇸🇳', 
        code: 'XOF',
        title: 'West African CFA Franc',
        symbol: 'Fr',
        precision: 0, 
        thousandSeparator: ',', 
        decimalSeparator: '.', 
        symbolPlacement: 'before', 
    },
    {
        code: 'EUR',
        title: 'Euro',
        symbol: '€ ',
        precision: 2,
        thousandSeparator: '.',
        decimalSeparator: ',',
        symbolPlacement: 'before',
        name: 'European Union',
        emoji: '🇪🇺',
    },
    {
        iso2: 'AE',
        name: 'United Arab Emirates',
        emoji: '🇦🇪',
        code: 'AED',
        title: 'UAE Dirham',
        symbol: 'AED',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'AR',
        name: 'Argentina',
        emoji: '🇦🇷',
        code: 'ARS',
        title: 'Argentine Peso',
        symbol: 'AR$',
        precision: 2,
        thousandSeparator: '.',
        decimalSeparator: ',',
        symbolPlacement: 'before',
    },
    {
        iso2: 'AM',
        name: 'Armenia',
        emoji: '🇦🇲',
        code: 'AMD',
        title: 'Armenian Dram',
        symbol: 'Դ',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'AU',
        name: 'Australia',
        emoji: '🇦🇺',
        code: 'AUD',
        title: 'Australian Dollar',
        symbol: 'AU$',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'BD',
        name: 'Bangladesh',
        emoji: '🇧🇩',
        code: 'BDT',
        title: 'Bangladesh, Taka',
        symbol: null,
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'BH',
        name: 'Bahrain',
        emoji: '🇧🇭',
        code: 'BHD',
        title: 'Bahraini Dinar',
        symbol: null,
        precision: 3,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'BS',
        name: 'Bahamas',
        emoji: '🇧🇸',
        code: 'BSD',
        title: 'Bahamian Dollar',
        symbol: 'B$',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'BA',
        name: 'Bosnia and Herzegovina',
        emoji: '🇧🇦',
        code: 'BAM',
        title: 'Bosnia and Herzegovina convertible mark',
        symbol: 'KM ',
        precision: 2,
        thousandSeparator: '.',
        decimalSeparator: ',',
        symbolPlacement: 'before',
    },
    {
        iso2: 'BZ',
        name: 'Belize',
        emoji: '🇧🇿',
        code: 'BZD',
        title: 'Belize Dollar',
        symbol: 'BZ$',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'BM',
        name: 'Bermuda',
        emoji: '🇧🇲',
        code: 'BMD',
        title: 'Bermudian Dollar',
        symbol: 'BD$',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'BO',
        name: 'Bolivia',
        emoji: '🇧🇴',
        code: 'BOB',
        title: 'Bolivia, Boliviano',
        symbol: 'Bs',
        precision: 2,
        thousandSeparator: '.',
        decimalSeparator: ',',
        symbolPlacement: 'before',
    },
    {
        iso2: 'BR',
        name: 'Brazil',
        emoji: '🇧🇷',
        code: 'BRL',
        title: 'Brazilian Real',
        symbol: 'R$',
        precision: 2,
        thousandSeparator: '.',
        decimalSeparator: ',',
        symbolPlacement: 'before',
    },
    {
        iso2: 'BN',
        name: 'Brunei',
        emoji: '🇧🇳',
        code: 'BND',
        title: 'Brunei Dollar',
        symbol: 'B$',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'BW',
        name: 'Botswana',
        emoji: '🇧🇼',
        code: 'BWP',
        title: 'Botswana, Pula',
        symbol: 'p',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'CA',
        name: 'Canada',
        emoji: '🇨🇦',
        code: 'CAD',
        title: 'Canadian Dollar',
        symbol: 'CA$',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'CN',
        name: 'China',
        emoji: '🇨🇳',
        code: 'CNY',
        title: 'China Yuan Renminbi',
        symbol: 'CN¥',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'CK',
        name: 'Cook Islands',
        emoji: '🇨🇰',
        code: 'NZD',
        title: 'New Zealand Dollar',
        symbol: 'NZ$',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'CO',
        name: 'Colombia',
        emoji: '🇨🇴',
        code: 'COP',
        title: 'Colombian Peso',
        symbol: 'COL$',
        precision: 2,
        thousandSeparator: '.',
        decimalSeparator: ',',
        symbolPlacement: 'before',
    },
    {
        iso2: 'CR',
        name: 'Costa Rica',
        emoji: '🇨🇷',
        code: 'CRC',
        title: 'Costa Rican Colon',
        symbol: '₡',
        precision: 2,
        thousandSeparator: '.',
        decimalSeparator: ',',
        symbolPlacement: 'before',
    },
    {
        iso2: 'CU',
        name: 'Cuba',
        emoji: '🇨🇺',
        code: 'CUC',
        title: 'Cuban Convertible Peso',
        symbol: 'CUC$',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'CW',
        name: 'Curaçao',
        emoji: '🇨🇼',
        code: 'ANG',
        title: 'Netherlands Antillian Guilder',
        symbol: 'NAƒ ',
        precision: 2,
        thousandSeparator: '.',
        decimalSeparator: ',',
        symbolPlacement: 'before',
    },
    {
        iso2: 'KY',
        name: 'Cayman Islands',
        emoji: '🇰🇾',
        code: 'KYD',
        title: 'Cayman Islands Dollar',
        symbol: 'CI$',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'CZ',
        name: 'Czechia',
        emoji: '🇨🇿',
        code: 'CZK',
        title: 'Czech Koruna',
        symbol: ' Kč',
        precision: 2,
        thousandSeparator: ' ',
        decimalSeparator: ',',
        symbolPlacement: 'after',
    },
    {
        iso2: 'DK',
        name: 'Denmark',
        emoji: '🇩🇰',
        code: 'DKK',
        title: 'Danish Krone',
        symbol: ' kr.',
        precision: 2,
        thousandSeparator: '.',
        decimalSeparator: ',',
        symbolPlacement: 'after',
    },
    {
        iso2: 'DO',
        name: 'Dominican Republic',
        emoji: '🇩🇴',
        code: 'DOP',
        title: 'Dominican Peso',
        symbol: 'RD$',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'EG',
        name: 'Egypt',
        emoji: '🇪🇬',
        code: 'EGP',
        title: 'Egyptian Pound',
        symbol: 'EGP',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'GB',
        name: 'United Kingdom',
        emoji: '🇬🇧',
        code: 'GBP',
        title: 'Pound Sterling',
        symbol: '£',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'GE',
        name: 'Georgia',
        emoji: '🇬🇪',
        code: 'GEL',
        title: 'Georgian lari',
        symbol: '₾',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'GI',
        name: 'Gibraltar',
        emoji: '🇬🇮',
        code: 'GIP',
        title: 'Gibraltar Pound',
        symbol: '£',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'GT',
        name: 'Guatemala',
        emoji: '🇬🇹',
        code: 'GTQ',
        title: 'Guatemala, Quetzal',
        symbol: 'Q',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'HK',
        name: 'Hong Kong',
        emoji: '🇭🇰',
        code: 'HKD',
        title: 'Hong Kong Dollar',
        symbol: 'HK$',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'HN',
        name: 'Honduras',
        emoji: '🇭🇳',
        code: 'HNL',
        title: 'Honduras, Lempira',
        symbol: 'L',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'HR',
        name: 'Croatia',
        emoji: '🇭🇷',
        code: 'HRK',
        title: 'Croatian Kuna',
        symbol: ' kn',
        precision: 2,
        thousandSeparator: '.',
        decimalSeparator: ',',
        symbolPlacement: 'after',
    },
    {
        iso2: 'HU',
        name: 'Hungary',
        emoji: '🇭🇺',
        code: 'HUF',
        title: 'Hungary, Forint',
        symbol: ' Ft',
        precision: 0,
        thousandSeparator: ' ',
        decimalSeparator: '',
        symbolPlacement: 'after',
    },
    {
        iso2: 'ID',
        name: 'Indonesia',
        emoji: '🇮🇩',
        code: 'IDR',
        title: 'Indonesia, Rupiah',
        symbol: 'Rp',
        precision: 2,
        thousandSeparator: '.',
        decimalSeparator: ',',
        symbolPlacement: 'before',
    },
    {
        iso2: 'IN',
        name: 'India',
        emoji: '🇮🇳',
        code: 'INR',
        title: 'Indian Rupee ₹',
        symbol: '₹',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'IR',
        name: 'Iran',
        emoji: '🇮🇷',
        code: 'IRR',
        title: 'Iranian Rial',
        symbol: null,
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'IS',
        name: 'Iceland',
        emoji: '🇮🇸',
        code: 'ISK',
        title: 'Iceland Krona',
        symbol: ' kr',
        precision: 0,
        thousandSeparator: '.',
        decimalSeparator: '',
        symbolPlacement: 'after',
    },
    {
        iso2: 'IL',
        name: 'Israel',
        emoji: '🇮🇱',
        code: 'ILS',
        title: 'New Israeli Shekel ₪',
        symbol: ' ₪',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'after',
    },
    {
        iso2: 'JM',
        name: 'Jamaica',
        emoji: '🇯🇲',
        code: 'JMD',
        title: 'Jamaican Dollar',
        symbol: 'J$',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'JO',
        name: 'Jordan',
        emoji: '🇯🇴',
        code: 'JOD',
        title: 'Jordanian Dinar',
        symbol: null,
        precision: 3,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'JP',
        name: 'Japan',
        emoji: '🇯🇵',
        code: 'JPY',
        title: 'Japan, Yen',
        symbol: '¥',
        precision: 0,
        thousandSeparator: ',',
        decimalSeparator: '',
        symbolPlacement: 'before',
    },
    {
        iso2: 'KE',
        name: 'Kenya',
        emoji: '🇰🇪',
        code: 'KES',
        title: 'Kenyan Shilling',
        symbol: 'KSh',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'KR',
        name: 'South Korea',
        emoji: '🇰🇷',
        code: 'KRW',
        title: 'South Korea, Won ₩',
        symbol: '₩',
        precision: 0,
        thousandSeparator: ',',
        decimalSeparator: '',
        symbolPlacement: 'before',
    },
    {
        iso2: 'KW',
        name: 'Kuwait',
        emoji: '🇰🇼',
        code: 'KWD',
        title: 'Kuwaiti Dinar',
        symbol: 'K.D.',
        precision: 3,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'LB',
        name: 'Lebanon',
        emoji: '🇱🇧',
        code: 'LBP',
        title: 'Lebanese Pound',
        symbol: 'LBP',
        precision: 0,
        thousandSeparator: ',',
        decimalSeparator: '',
        symbolPlacement: 'before',
    },
    {
        iso2: 'LI',
        name: 'Liechtenstein',
        emoji: '🇱🇮',
        code: 'CHF',
        title: 'Swiss Franc',
        symbol: 'SFr ',
        precision: 2,
        thousandSeparator: "'",
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'MX',
        name: 'Mexico',
        emoji: '🇲🇽',
        code: 'MXN',
        title: 'Mexican Peso',
        symbol: 'MX$',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'MK',
        name: 'North Macedonia',
        emoji: '🇲🇰',
        code: 'MKD',
        title: 'Macedonia, Denar',
        symbol: 'ден ',
        precision: 2,
        thousandSeparator: '.',
        decimalSeparator: ',',
        symbolPlacement: 'before',
    },
    {
        iso2: 'MN',
        name: 'Mongolia',
        emoji: '🇲🇳',
        code: 'MNT',
        title: 'Mongolian tugrik',
        symbol: '₮',
        precision: 0,
        thousandSeparator: ',',
        decimalSeparator: '',
        symbolPlacement: 'before',
    },
    {
        iso2: 'MU',
        name: 'Mauritius',
        emoji: '🇲🇺',
        code: 'MUR',
        title: 'Mauritius Rupee',
        symbol: 'Rs',
        precision: 0,
        thousandSeparator: ',',
        decimalSeparator: '',
        symbolPlacement: 'before',
    },
    {
        iso2: 'MY',
        name: 'Malaysia',
        emoji: '🇲🇾',
        code: 'MYR',
        title: 'Malaysian Ringgit',
        symbol: 'RM',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'NG',
        name: 'Nigeria',
        emoji: '🇳🇬',
        code: 'NGN',
        title: 'Nigerian Naira',
        symbol: '₦',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'NO',
        name: 'Norway',
        emoji: '🇳🇴',
        code: 'NOK',
        title: 'Norwegian Krone',
        symbol: 'kr ',
        precision: 2,
        thousandSeparator: ' ',
        decimalSeparator: ',',
        symbolPlacement: 'before',
    },
    {
        iso2: 'NP',
        name: 'Nepal',
        emoji: '🇳🇵',
        code: 'NPR',
        title: 'Nepalese Rupee',
        symbol: null,
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'OM',
        name: 'Oman',
        emoji: '🇴🇲',
        code: 'OMR',
        title: 'Rial Omani',
        symbol: 'OMR',
        precision: 3,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'PK',
        name: 'Pakistan',
        emoji: '🇵🇰',
        code: 'PKR',
        title: 'Pakistan Rupee',
        symbol: null,
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'PE',
        name: 'Peru',
        emoji: '🇵🇪',
        code: 'PEN',
        title: 'Peru, Nuevo Sol',
        symbol: 'S/.',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'PH',
        name: 'Philippines',
        emoji: '🇵🇭',
        code: 'PHP',
        title: 'Philippine Peso',
        symbol: '₱',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'PL',
        name: 'Poland',
        emoji: '🇵🇱',
        code: 'PLN',
        title: 'Poland, Zloty',
        symbol: ' zł',
        precision: 2,
        thousandSeparator: ' ',
        decimalSeparator: ',',
        symbolPlacement: 'after',
    },
    {
        iso2: 'RO',
        name: 'Romania',
        emoji: '🇷🇴',
        code: 'RON',
        title: 'Romania, New Leu',
        symbol: null,
        precision: 2,
        thousandSeparator: '.',
        decimalSeparator: ',',
        symbolPlacement: 'before',
    },
    {
        iso2: 'RU',
        name: 'Russia',
        emoji: '🇷🇺',
        code: 'RUB',
        title: 'Russian Ruble',
        symbol: ' руб',
        precision: 2,
        thousandSeparator: ' ',
        decimalSeparator: ',',
        symbolPlacement: 'after',
    },
    {
        iso2: 'SA',
        name: 'Saudi Arabia',
        emoji: '🇸🇦',
        code: 'SAR',
        title: 'Saudi Riyal',
        symbol: 'SAR',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'SG',
        name: 'Singapore',
        emoji: '🇸🇬',
        code: 'SGD',
        title: 'Singapore Dollar',
        symbol: 'S$',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'SV',
        name: 'El Salvador',
        emoji: '🇸🇻',
        code: 'SVC',
        title: 'El Salvador Colon',
        symbol: '₡',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'SE',
        name: 'Sweden',
        emoji: '🇸🇪',
        code: 'SEK',
        title: 'Swedish Krona',
        symbol: ' kr',
        precision: 2,
        thousandSeparator: ' ',
        decimalSeparator: ',',
        symbolPlacement: 'after',
    },
    {
        iso2: 'RS',
        name: 'Serbia',
        emoji: '🇷🇸',
        code: 'RSD',
        title: 'Serbian Dinar',
        symbol: 'дин',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'after',
    },
    {
        iso2: 'QR',
        name: 'Qatar',
        emoji: '🇷🇸',
        code: 'QAR',
        title: 'Qatari Riyal',
        symbol: 'ر.ق.',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'after',
    },
    {
        iso2: 'SZ',
        name: 'Eswatini',
        emoji: '🇸🇿',
        code: 'SZL',
        title: 'Swaziland, Lilangeni',
        symbol: 'E',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'TW',
        name: 'Taiwan',
        emoji: '🇹🇼',
        code: 'TWD',
        title: 'New Taiwan Dollar',
        symbol: '元',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'TH',
        name: 'Thailand',
        emoji: '🇹🇭',
        code: 'THB',
        title: 'Thailand, Baht ฿',
        symbol: '฿',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'TO',
        name: 'Tonga',
        emoji: '🇹🇴',
        code: 'TOP',
        title: 'Tonga, Paanga',
        symbol: 'T$ ',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'TR',
        name: 'Turkey',
        emoji: '🇹🇷',
        code: 'TRY',
        title: 'New Turkish Lira',
        symbol: '₺',
        precision: 2,
        thousandSeparator: '.',
        decimalSeparator: ',',
        symbolPlacement: 'before',
    },
    {
        iso2: 'TZ',
        name: 'Tanzania',
        emoji: '🇹🇿',
        code: 'TZS',
        title: 'Tanzanian Shilling',
        symbol: 'TSh',
        precision: 0,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'UA',
        name: 'Ukraine',
        emoji: '🇺🇦',
        code: 'UAH',
        title: 'Ukraine, Hryvnia',
        symbol: ' ₴',
        precision: 2,
        thousandSeparator: ' ',
        decimalSeparator: ',',
        symbolPlacement: 'after',
    },
    {
        iso2: 'US',
        name: 'United States',
        emoji: '🇺🇸',
        code: 'USD',
        title: 'US Dollar',
        symbol: '$',
        precision: 2,
        thousandSeparator: ',',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
    {
        iso2: 'UG',
        name: 'Uganda',
        emoji: '🇺🇬',
        code: 'UGX',
        title: 'Ugandan Shilling',
        symbol: 'USh',
        precision: 0,
        thousandSeparator: ',',
        decimalSeparator: '/',
        symbolPlacement: 'before',
    },
    {
        iso2: 'VN',
        name: 'Vietnam',
        emoji: '🇻🇳',
        code: 'VND',
        title: 'Viet Nam, Dong ₫',
        symbol: ' ₫',
        precision: 0,
        thousandSeparator: '.',
        decimalSeparator: '',
        symbolPlacement: 'after',
    },
    {
        iso2: 'VU',
        name: 'Vanuatu',
        emoji: '🇻🇺',
        code: 'VUV',
        title: 'Vanuatu, Vatu',
        symbol: 'VT',
        precision: 0,
        thousandSeparator: ',',
        decimalSeparator: '',
        symbolPlacement: 'before',
    },
    {
        iso2: 'ZA',
        name: 'South Africa',
        emoji: '🇿🇦',
        code: 'ZAR',
        title: 'South Africa, Rand',
        symbol: 'R',
        precision: 2,
        thousandSeparator: ' ',
        decimalSeparator: '.',
        symbolPlacement: 'before',
    },
];

export default function getCurrency(code) {
    if (!code) {
        return currencies;
    }

    return currencies.find((currency) => {
        if (code.length === 2) {
            return currency.iso2.toLowerCase() === code.toLowerCase();
        }

        if (code.length === 3) {
            return currency.code.toLowerCase() === code.toLowerCase();
        }

        return currency.name.toLowerCase() === code.toLowerCase();
    });
}
