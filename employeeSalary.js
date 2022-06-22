let salary = [
    [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
    [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
    [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
    [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75]
];


// İl ərzində bütün işçilərin maaşlarının cəmi
console.log('Birinci tapşırıq\n\n');

function getAnnualSalary() {
    for(let i = 0; i < 10; i++) {

        let total = 0;
        for(let j = 0; j < 12; j++) {
            total += salary[i][j];
    
            
        }
        console.log(total);
    }
}

// Hər işçinin illik ümumi gəliri
getAnnualSalary();


// Ay nömrəsini parametr kimi qəbul etmək və həmin ayın maaşlarını çıxarmaq
console.log('\nİkinci tapşırıq\n\n');

function getMonthlySalary(month) {
    let arr = [];
    for(let i = 0; i < 10; i++) {
        
        let a = salary[i][month - 1];
        arr[i] = a;

    }
    return arr;
}


// 12 - ci ay
console.log(getMonthlySalary(12));


// Rüb ərzində maaşların ümumi cəmi
console.log('\nÜçüncü tapşırıq\n\n');

function getQuarterSalary(quarter) {
    let quarterTotal = 0;

    switch(quarter) {
        case 1:
            for(month = 1; month <= 3; month++) {
                for(let i = 0; i < 10; i++) {
                    quarterTotal += getMonthlySalary(month)[i];
                }
            }
        console.log(quarterTotal); break;

        case 2:
            for(month = 4; month <= 6; month++) {
                for(let i = 0; i < 10; i++) {
                    quarterTotal += getMonthlySalary(month)[i];
                }
            }
        console.log(quarterTotal); break;

        case 3:
            for(month = 7; month <= 9; month++) {
                for(let i = 0; i < 10; i++) {
                    quarterTotal += getMonthlySalary(month)[i];
                }
            }
        console.log(quarterTotal); break;

        case 4:
            for(month = 10; month <= 12; month++) {
                for(let i = 0; i < 10; i++) {
                    quarterTotal += getMonthlySalary(month)[i];
                }
            }
        console.log(quarterTotal); break;

        default: console.log('wrong quarter');
    }

}

// 1 - ci rübdəki maaşların cəmi
getQuarterSalary(1);