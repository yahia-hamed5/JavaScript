let merath = +window.prompt("enter Your merath");
let wife = window.confirm("هل لديك زوجة ؟");
if (wife == true) {
    let num_wife = +window.prompt("ادخل عدد زوجاتك ");
    let one_wife = merath * (1 / 8);
    let all_Wife = num_wife * one_wife;
    let merath_after_wife = merath - all_Wife;
    let sons = window.confirm('هل لديك أولاد ذكور ؟');
    if (sons == true) {
        let num_sons = +window.prompt("ادخل عدد أولادك الذكور ");
        let girls = +window.confirm('هل لديك بنات ؟');
        if (girls == true) {
            let num_girls = +window.prompt("ادخل عدد البنات ");
            let all_sons_girls = (num_sons * 2) + num_girls
            let merath_one = merath_after_wife / all_sons_girls;

            document.write(`
                <pre>
                "نصيب الزوجه" : ${one_wife}
                "نصيب الرجل " : ${2 * merath_one} 
                "نصيب البنت " : ${merath_one}
                </pre>
                `);
        } else {
            let merath_one = merath_after_wife / num_sons;

            document.write(`
                <pre>
                "نصيب الزوجه" : ${one_wife}
                "نصيب الرجل " : ${merath_one} 
                </pre>
                `);
        }
    } else {
        let girls = +window.confirm('هل لديك بنات ؟');
        if (girls == true) {
            let num_girls = +window.prompt("ادخل عدد البنات ");
            let merath_one = merath_after_wife / num_girls;

            document.write(`
                <pre>
                "نصيب الزوجه" : ${one_wife}
                "نصيب البنت " : ${merath_one}
                </pre>
                `);
        } else {
            document.write(`
                <pre>
                "نصيب الزوجه" : ${merath}
                </pre>
                `);
        }
    }
} else {
    let sons = window.confirm('هل لديك أولاد ذكور ؟');
    if (sons == true) {
        let num_sons = +window.prompt("ادخل عدد أولادك الذكور ");
        let girls = +window.confirm('هل لديك بنات ؟');
        if (girls == true) {
            let num_girls = +window.prompt("ادخل عدد البنات ");
            let all_sons_girls = (num_sons * 2) + num_girls
            let merath_one = merath / all_sons_girls;

            document.write(`
                <pre>
                "نصيب الرجل " : ${2 * merath_one} 
                "نصيب البنت " : ${merath_one}
                </pre>
                `);
        } else {

            let merath_one = merath / num_sons;
            document.write(`
                <pre>
                "نصيب الرجل " : ${merath_one} 
                </pre>
                `);
        }
    } else {
        let girls = +window.confirm('هل لديك بنات ؟');
        if (girls == true) {
            let num_girls = +window.prompt("ادخل عدد البنات ");
            let merath_one = merath / num_girls;

            document.write(`
                <pre>
                "نصيب البنت " : ${merath_one}
                </pre>
                `);
        } else {
            document.write('راجل مش متجوز ولا عنده اولاد ولا بنات تصدق بيهم بقا ');
        }
    }
}
