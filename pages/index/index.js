// index.js
const {Solar, SolarMonth, Lunar, LunarYear, LunarMonth, HolidayUtil} = require('lunar-javascript')

function generateYearArray() {
    const currentYear = new Date().getFullYear();
    const startYear = 1900;
    const yearArray = [];

    for (let year = startYear; year <= currentYear; year++) {
        yearArray.push(year.toString());
    }

    return yearArray;
}
function getMonths(yearIndex, isSolar) {
    if (isSolar) {
        return MONTH_LIST;
    }
    const lunarYear = LunarYear.fromYear(YEAR_LIST[yearIndex]);
    const months = lunarYear.getMonthsInYear();
    console.log(months)
    return months.map(item => {
        const monthStr = item.toString();
        const startIndex = monthStr.indexOf('年');
        const endIndex = monthStr.indexOf('(');
        return monthStr.slice(startIndex + 1, endIndex);
    })
}
function getDays(year, month, isSolar) {
    if (isSolar) {
        const days = SolarMonth.fromYm(year, month).getDays();
        const ret = days.map((_, index) => index + 1 + '日');
        console.log(ret)
        return ret;
    }
    const dayCount = LunarMonth.fromYm(year, month).getDayCount();
    console.log(dayCount)
    return LUNAR_DAY_LIST.slice(0, dayCount)
}
const YEAR_LIST = generateYearArray();
const DEFAULT_YEAR_INDEX =  YEAR_LIST.length - 1;
const MONTH_LIST = [
    '1月',
    '2月',
    '3月',
    '4月',
    '5月',
    '6月',
    '7月',
    '8月',
    '9月',
    '10月',
    '11月',
    '12月'
  ];
const LUNAR_MONTH_LIST = getMonths(DEFAULT_YEAR_INDEX, false)
/*
    '正月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '冬月',
    '腊月'
*/
const DAY_LIST = getDays(DEFAULT_YEAR_INDEX, 1, true);
const LUNAR_DAY_LIST = [
  '初一',
  '初二',
  '初三',
  '初四',
  '初五',
  '初六',
  '初七',
  '初八',
  '初九',
  '初十',
  '十一',
  '十二',
  '十三',
  '十四',
  '十五',
  '十六',
  '十七',
  '十八',
  '十九',
  '二十',
  '廿一',
  '廿二',
  '廿三',
  '廿四',
  '廿五',
  '廿六',
  '廿七',
  '廿八',
  '廿九',
  '三十'
];
const SC_LIST = [
    '00:00~00:59 早子时',
    '01:00~02:59 丑时',
    '03:00~04:59 寅时',
    '05:00~06:59 卯时',
    '07:00~08:59 辰时',
    '09:00~10:59 巳时',
    '11:00~12:59 午时',
    '13:00~14:59 未时',
    '15:00~16:59 申时',
    '17:00~18:59 酉时',
    '19:00~20:59 戌时',
    '21:00~22:59 亥时',
    '23:00~23:59 晚子时'
  ];

Page({
    data: {
        calendarTypes: ['阳历', '阴历'],
        calendarIndex: 0,
        isSolar: true,
        multiArray: [YEAR_LIST, MONTH_LIST, DAY_LIST, SC_LIST],
        objectMultiArray: [
          [
            {
              id: 0,
              name: '无脊柱动物'
            },
            {
              id: 1,
              name: '脊柱动物'
            }
          ], [
            {
              id: 0,
              name: '扁性动物'
            },
            {
              id: 1,
              name: '线形动物'
            },
            {
              id: 2,
              name: '环节动物'
            },
            {
              id: 3,
              name: '软体动物'
            },
            {
              id: 4,
              name: '节肢动物'
            }
          ], [
            {
              id: 0,
              name: '猪肉绦虫'
            },
            {
              id: 1,
              name: '吸血虫'
            }
          ]
        ],
        multiIndex: [DEFAULT_YEAR_INDEX, 0, 0, 0],
        selectedIndex: [DEFAULT_YEAR_INDEX, 0, 0, 0],
    },
    bindPickerChange(e) {
        console.log('picker发送选择改变，携带值为', e.detail)
        this.setData({
            selectedIndex: e.detail.value
        })
    },
    bindPickerColumnChange(e) {
        const { column , value } = e.detail;
        console.log(column)
        switch ( column ) {
            case 0: {
                const months = getMonths(value, this.data.isSolar);
                const days = getDays(value, this.data.multiIndex[1] + 1 );
                if (this.data.multiIndex[1] >= months.length) {
                    this.setData({ 'multiIndex[1]': months.length - 1 });
                }
                if (this.data.multiIndex[2] >= days.length) {
                    this.setData({ 'multiIndex[2]': days.length - 1 });
                }
                this.setData({
                    'multiArray[1]': months,
                    'multiArray[2]': days,
                })           
                break;
            }
            case 1: {
                const days = getDays(YEAR_LIST[this.data.multiIndex[0]], value + 1 );
                if (this.data.multiIndex[2] >= days.length) {
                    this.setData({ 'multiIndex[2]': days.length - 1 });
                }
                this.setData({
                    'multiArray[2]': days
                })
                break;
            }
            // case 2: {
            //     break;
            // }
            // case 3: {

            //     break;
            // }
        }

        this.setData({
            [`multiIndex[${e.detail.column}]`]: e.detail.value,
        })
        // console.log('===========', getDays(e.detail.value))
        console.log('index', this.data.multiIndex)
    },
  
    onTypeChange(e) {
        this.setData({
            calendarIndex: e.detail.value,
            isSolar: e.detail.value === 0
        })
        if (e.detail.value === 1) { // 阴历
            this.setData({
                'multiArray[1]': LUNAR_MONTH_LIST,
                'multiArray[2]': LUNAR_DAY_LIST,
            })
        } else {
            this.setData({
                'multiArray[1]': MONTH_LIST,
                'multiArray[2]': DAY_LIST,
            })
        }
    }
 })

