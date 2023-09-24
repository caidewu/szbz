// index.js
const {Solar, SolarMonth, Lunar, LunarYear, LunarMonth, HolidayUtil} = require('lunar-javascript')

function generateYearArray() {
    const currentYear = new Date().getFullYear();
    const startYear = 1900;
    const yearArray = [];

    for (let year = startYear; year <= currentYear + 50; year++) {
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
const GAN = {
    '甲': 0,
    '乙': 1,
    '丙': 2,
    '丁': 3,
    '戊': 4,
    '己': 5,
    '庚': 6,
    '辛': 7,
    '壬': 8,
    '癸': 9,
}
const ZHI = {
    '子': 0,
    '丑': 1,
    '寅': 2,
    '卯': 3,
    '辰': 4,
    '巳': 5,
    '午': 6,
    '未': 7,
    '申': 8,
    '酉': 9,
    '戌': 10,
    '亥': 11, 
};
const SHENSHA_NAME = {
    NZ: ['孤辰', '寡宿', '大耗', '大耗' ],
    YZ: ['天德贵人', '月德贵人'],
    RZ: ['将星', '华盖', '驿马', '劫煞', '亡神', '桃花' ],
    RG: ['天乙贵人', '天乙贵人', '文昌贵人', '羊刃', '干禄', '红艳', '沐浴'],
}
const SHENSHA = {
    NZ: [
        ['寅', '寅', '巳', '巳', '巳', '申', '申', '申', '亥', '亥', '亥', '寅' ],
        ['戌', '戌', '丑', '丑', '丑', '辰', '辰', '辰', '未', '未', '未', '戌' ],
        ['未', '申', '酉', '戌', '亥', '子', '丑', '寅', '卯', '辰', '巳', '午' ],
        ['巳', '午', '未', '申', '酉', '戌', '亥', '子', '丑', '寅', '卯', '辰' ],
    ],
    YZ: [
        ['巳', '庚', '丁', '申', '壬', '辛', '亥', '甲', '癸', '寅', '丙', '乙' ],
        ['壬', '庚', '丙', '甲', '壬', '庚', '丙', '甲', '壬', '庚', '丙', '甲' ],
    ],
    RZ: [
        ['子', '酉', '午', '卯', '子', '酉', '午', '卯', '子', '酉', '午', '卯' ],
        ['辰' ,'丑', '戌', '未', '辰' ,'丑', '戌', '未', '辰' ,'丑', '戌', '未' ],
        ['寅', '亥', '申', '巳', '寅', '亥', '申', '巳', '寅', '亥', '申', '巳' ],
        ['巳', '寅', '亥', '申', '巳', '寅', '亥', '申', '巳', '寅', '亥', '申' ],
        ['亥', '申', '巳', '寅', '亥', '申', '巳', '寅', '亥', '申', '巳', '寅' ],
        ['酉', '午', '卯', '子', '酉', '午', '卯', '子', '酉', '午', '卯', '子' ],
    ],
    RG: [
        ['丑', '子', '亥', '亥', '丑', '子', '丑', '午', '巳', '巳' ],
        ['未', '申', '酉', '酉', '未', '申', '未', '寅', '卯', '卯' ],
        ['巳', '午', '申', '酉', '申', '酉', '亥', '子', '寅', '卯' ],
        ['卯', '空', '午', '空', '午', '空', '酉', '空', '子', '空'  ],
        ['寅', '卯', '巳', '午', '巳', '午', '申', '酉', '亥', '子' ],
        ['午', '午', '寅', '未', '辰', '辰', '戌', '酉', '子', '申' ],
        ['子', '巳', '卯', '申', '卯', '申', '午', '亥', '酉', '寅' ],
    ],
}

const YEAR_LIST = generateYearArray();
const DEFAULT_YEAR_INDEX =  YEAR_LIST.length - 71;
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
const SC_TEXT_LIST = [
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
  const SC_LIST = [
    '0',
    '1',
    '3',
    '5',
    '7',
    '9',
    '11',
    '13',
    '15',
    '17',
    '19',
    '21',
    '23'
  ];
Page({
    data: {
        calendarTypes: ['阳历', '阴历'],
        calendarIndex: 0,
        isSolar: true,
        bazi: {},
        shishen: {},
        canggan: {},
        multiArray: [YEAR_LIST, MONTH_LIST, DAY_LIST, SC_TEXT_LIST],
        color: {
            '甲': 'green',
            '乙': 'green',
            '丙': 'red',
            '丁': 'red',
            '戊': 'brown',
            '己': 'brown',
            '庚': 'gold',
            '辛': 'gold',
            '壬': 'blue',
            '癸': 'blue',
            '子': 'blue',
            '丑': 'brown',
            '寅': 'green',
            '卯': 'green',
            '辰': 'brown',
            '巳': 'red',
            '午': 'red',
            '未': 'brown',
            '申': 'gold',
            '酉': 'gold',
            '戌': 'brown',
            '亥': 'blue',
        },
        kongwang: '',
        shengwang: {},
        shensha: {},
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
    },
    onAdd(e) {
        const monthIndex = this.data.selectedIndex[1];
        
        
        const year = this.data.multiArray[0][this.data.selectedIndex[0]];
        const day = this.data.selectedIndex[2] + 1;
        let month = monthIndex + 1; // 月份 1-12
        const hour = SC_LIST[this.data.selectedIndex[3]];

        const text = this.data.multiArray[0][this.data.selectedIndex[0]] + 
                        '年' + this.data.multiArray[1][monthIndex] +
                        this.data.multiArray[2][this.data.selectedIndex[2]] +
                        this.data.multiArray[3][this.data.selectedIndex[3]];

        let lunar;
        if (this.data.isSolar) {
            // 构建Date对象
            const solar = Solar.fromYmdHms(year, month, day, hour, 0, 0)
            lunar = solar.getLunar();
            
        } else {
            // 阴历闰月特殊处理
            // const hasRun = this.data.multiArray[1].length > 12;
            let runFlag = 1;
            const lunarMonths = this.data.multiArray[1].map((item, index) => {
                const monthStr = this.data.multiArray[1][index];
                if (monthStr.indexOf('闰') !== -1) { // 闰月
                    runFlag = 0;
                    return 0 - index;
                }
                return index + runFlag;
                
            })
           console.log('lunarMonth', lunarMonths)
            const lunarDate = {
                year,
                month: lunarMonths[monthIndex],
                day,
                hour,
                isSolar: this.data.isSolar,
                text,
            }
            lunar = Lunar.fromYmdHms(year, lunarMonths[monthIndex], day, hour, 0, 0)
          
        }

        const bz = lunar.getEightChar();
        this.setData({
            bazi: {
                ng: bz.getYearGan(),
                yg: bz.getMonthGan(),
                rg: bz.getDayGan(),
                sg: bz.getTimeGan(),
                nz: bz.getYearZhi(),
                yz: bz.getMonthZhi(),
                rz: bz.getDayZhi(),
                sz: bz.getTimeZhi(),
            },
            canggan: {
                nz: bz.getYearHideGan(),
                yz: bz.getMonthHideGan(),
                rz: bz.getDayHideGan(),
                sz: bz.getTimeHideGan(),
            },
            shishen: {
                ng: bz.getYearShiShenGan(),
                yg: bz.getMonthShiShenGan(),
                sg: bz.getTimeShiShenGan(),

                nz: bz.getYearShiShenZhi(),
                yz: bz.getMonthShiShenZhi(),
                rz: bz.getDayShiShenZhi(),
                sz: bz.getTimeShiShenZhi(),
            },
            kongwang: bz.getDayXunKong(),
            shengwang: {
                nz: bz.getYearDiShi(),
                yz: bz.getMonthDiShi(),
                rz: bz.getDayDiShi(),
                sz: bz.getTimeDiShi(),
            },
            
        })
        const shensha = this.getShensha();
        this.setData({ shensha })
             
        
    },
    getShensha() {
        const { ng, nz, yg, yz, rg, rz, sg, sz } = this.data.bazi;
        const nzIndex = ZHI[nz];
        const yzIndex = ZHI[yz];
        const rzIndex = ZHI[rz];
        const rgIndex = GAN[rg];
        const bazi = {
            nz: [ng, nz],
            yz: [yg, yz],
            rz: [rg, rz],
            sz: [sg, sz],
        };

        const shensha = {
            nz: [],
            yz: [],
            rz: [],
            sz: [],
        }
        const nzSs = SHENSHA.NZ.map(item => item[nzIndex]);
        const yzSs = SHENSHA.YZ.map(item => item[yzIndex]);
        const rzSs = SHENSHA.RZ.map(item => item[rzIndex]);
        const rgSs = SHENSHA.RG.map(item => item[rgIndex]);
        
        
        console.log(nzSs);
        console.log(yzSs);
        console.log(rzSs);
        console.log(rgSs);
        bazi.nz.forEach(item => {
            const nIndex = nzSs.indexOf(item);
            if (nIndex !== -1) {
                shensha.nz.push(SHENSHA_NAME.NZ[nIndex])
            }
            const rIndex = rzSs.indexOf(item);
            if (rIndex !== -1) {
                shensha.nz.push(SHENSHA_NAME.RZ[rIndex])
            }
            const rgIndex = rgSs.indexOf(item);
            if (rgIndex !== -1) {
                shensha.nz.push(SHENSHA_NAME.RG[rgIndex])
            }
        })
        bazi.yz.forEach(item => {
            const index = nzSs.indexOf(item);
            if (index !== -1) {
                shensha.yz.push(SHENSHA_NAME.NZ[index])
            }
        
            const rIndex = rzSs.indexOf(item);
            if (rIndex !== -1) {
                shensha.yz.push(SHENSHA_NAME.RZ[rIndex])
            }
            const rgIndex = rgSs.indexOf(item);
            if (rgIndex !== -1) {
                shensha.yz.push(SHENSHA_NAME.RG[rgIndex])
            }
        })
        bazi.rz.forEach(item => {
            const index = nzSs.indexOf(item);
            if (index !== -1) {
                shensha.rz.push(SHENSHA_NAME.NZ[index])
            }
            const yIndex = yzSs.indexOf(item);
            if (yIndex !== -1) {
                shensha.rz.push(SHENSHA_NAME.YZ[yIndex])
            }
            const rIndex = rzSs.indexOf(item);
            if (rIndex !== -1) {
                shensha.rz.push(SHENSHA_NAME.RZ[rIndex])
            }
            const rgIndex = rgSs.indexOf(item);
            if (rgIndex !== -1) {
                shensha.rz.push(SHENSHA_NAME.RG[rgIndex])
            }
        })
        bazi.sz.forEach(item => {
            const index = nzSs.indexOf(item);
            if (index !== -1) {
                shensha.sz.push(SHENSHA_NAME.NZ[index])
            }
          
            const rIndex = rzSs.indexOf(item);
            if (rIndex !== -1) {
                shensha.sz.push(SHENSHA_NAME.RZ[rIndex])
            }
            const rgIndex = rgSs.indexOf(item);
            if (rgIndex !== -1) {
                shensha.sz.push(SHENSHA_NAME.RG[rgIndex])
            }
        })
        console.log(shensha)
        return shensha;

    }
 })

