var now = new Date().getTime() / 1000;
         var debt_snapshot = new Date(2014, 7, 31, 23, 59, 59, 0).getTime() / 1000;
         var seconds_diff = now-debt_snapshot;
         var starting_debt = 3303800000.0;
         var second_debt = 3.457172754;
         var curren_debt = starting_debt+second_debt*seconds_diff;
         setDebtClockFast(curren_debt, second_debt);