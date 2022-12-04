exports.cities = [
    {
        state: 'AL',
        name: 'Montgomery',
        zipcode: '36101',
        edges: [
            '30301',
            '39201',
            '37201',
            '32301'
        ]
    },
    {
        state: 'WA',
        name: 'Olympia',
        zipcode: '98501',
        edges: [
            '97301',
            '83701'
        ]
    },
    {
        state: 'OR',
        name: 'Salem',
        zipcode: '97301',
        edges: [
            '83701',
            '94203',
            '89721'
        ]
    },
    {
        state: 'CA',
        name: 'Sacramento',
        zipcode: '94203',
        edges: [
            '97301',
            '89721'
        ]
    },
    {
        state: 'MT',
        name: 'Helena',
        zipcode: '59601',
        edges: [
            '83701',
            '82001',
            // '58501',
            //'57501'
        ]
    },
    {
        state: 'ID',
        name: 'Boise',
        zipcode: '83701',
        edges: [
            '98501',
            '97301',
            '59601',
            '82001',
            '84101',
            '89721'

        ]
    },
    {
        state: 'NV',
        name: 'Carson City',
        zipcode: '89721',
        edges: [
            '97301',
            '94203',
            '83701',
            '84101',
            '85001'
        ]
    },
    {
        state: 'WY',
        name: 'Cheyenne',
        zipcode: '82001',
        edges: [
            '59601',
            '83701',
            '84101',
            '80201',
            //'68501',
            //'57501'
        ]
    },
    {
        state: 'UT',
        name: 'Salt Lake City',
        zipcode: '84101',
        edges: [
            '82001',
            '83701',
            '89721',
            '85001',
            '87501',
            '80201'
        ]
    },
    {
        state: 'AZ',
        name: 'Phoenix',
        zipcode: '85001',
        edges: [
            '84101',
            '94203',
            '89721',
            '80201',
            '87501'
        ]
    },
    {
        state: 'CO',
        name: 'Denver',
        zipcode: '80201',
        edges: [
            '82001',
            '84101',
            '85001',
            '87501',
            //'68501',
            //'66601',
            //'73101'
        ]
    },
    {
        state: 'NM',
        name: 'Santa Fe',
        zipcode: '87501',
        edges: [
            '80201',
            '84101',
            '85001',
            //'73101',
            //'73301'
        ]
    },
    {
        state: 'ND',
        name: 'Bismarck',
        zipcode: '58501',
        edges: [
            '59601', // Helena - Montana - MT
            '57501', // Pierre - South Dakote  - SD
            '55101' // Saint Paul - Minnesota - MN
        ]
    },
    {
        state: 'SD',
        name: 'Pierre',
        zipcode: '57501',
        edges: [
            '58501', // Bismarck - North Dakota
            '59601', // Helena - Montana - MT
            '82001', // Cheyenne - WY
            '68501', // Lincoln - Nebraska - NE
            '50301', // Des moines - Iowa - IA
            '55101' // Saint Paul - Minnesota - MN
        ]
    },
    {
        state: 'NE',
        name: 'Lincoln',
        zipcode: '68501',
        edges: [
            '57501', // Pierre - South Dakota - SD
            '82001', // Cheyenne - WY
            '80201', // Denver - Colorado - CO
            '66601', // Tokepa - Kansas - KS
            '65101', // Jefferson City - Missouri - MO
            '50301', // Des moines - Iowa - IA
        ]
    },
    {
        state: 'KS',
        name: 'Topeka',
        zipcode: '66601',
        edges: [
            '68501', // Lincoln - Nebraska - NE
            '80201', // Denver - Colorado - CO
            '73101', // Oklahoma City - Oklahoma - OK
            '65101', // Jefferson City - Missouri - MO
        ]
    },
    {
        state: 'OK',
        name: 'Oklahoma City',
        zipcode: '73101',
        edges: [
            '66601', // Tokepa - Kansas - KS
            '80201', // Denver - Colorado - CO
            '87501', // Santa fé - New México - NM
            '73301', // Austin - Texas - TX
            '72201', // Little Rock - Arkansas - AR
            '65101', // Jefferson City - Missouri - MO
        ]
    },
    {
        state: 'TX',
        name: 'Austin',
        zipcode: '73301',
        edges: [
            '73101', // Oklahoma City - Oklahoma - OK
            '87501', // Santa fé - New México - NM
            '70801', // Baton Rouge - Lousiana - LA
            '72201', // Little Rock - Arkansas - AR
        ]
    },
    // {
    //     state: '',
    //     name: '',
    //     zipcode: '',
    //     edges: [
    //         ''
    //     ]
    // },
]