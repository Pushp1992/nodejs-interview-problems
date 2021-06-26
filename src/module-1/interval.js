

/**
 * Below logic prints number 6 only, for six times.
 * 
 * TODO:
 * 1.  Modify the below logic to print number from 0 to 5 after 2 second only.
 * 
 * After solving above problem, you will be able to get output of number from 0 to 5 after 2 sec only.
 * 
 * TODO:
 * 2. Refactor the logic to get the number printed at an interval of 2 second each (one by one).
 */

for (i = 0; i < 6; i++) {

    setTimeout(() => {
        console.log(`Print me out ${i}`);
    },2000);

};