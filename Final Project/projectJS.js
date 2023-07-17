document.getElementById('submit').addEventListener('click',myWindow)
function myWindow() {

        inputName = document.getElementById("name").value;
        inputEmail = document.getElementById("email").value;
        inputGoal = document.getElementById("goal").value;

        if (!inputEmail.match(/^.+\@.+\..+$/)) {
                alert("Please enter a valid email address");
        }
        else {
        mealPlan = document.getElementById("mealPlan").outerHTML;
        style = document.head.innerHTML;
    
        flyWindow = window.open('about:blank','myPop','width=600,height=800,left=200,top=200');
        banner = "<div style=\"text-align:center\"><img src=\"banner.png\" width=\"250\" height=\"250\" alt=\"Description of the image\"></div>"
        flyWindow.document.write(banner);

        /*Intro*/

        var mealPlanDiv = document.createElement('div');
        var userText = document.createElement('p');
        userText.appendChild(document.createTextNode('Meal plan for ' + inputName + ' (' + inputEmail + ') in order to ' + inputGoal));
        mealPlanDiv.appendChild(userText);

        /*Button*/

        var print = document.createElement("button");
        print.appendChild(document.createTextNode("Print"));
        var func = document.createAttribute("onclick");
        func.value = "(function(){window.print();})()";
        print.setAttributeNode(func);
        mealPlanDiv.appendChild(print);

        /*Monday*/

        var m_day = document.createElement("h1");
        m_day.appendChild(document.createTextNode("MONDAY"));
        mealPlanDiv.appendChild(m_day);

        monb = document.getElementById("mon_b").value;
        mons = document.getElementById("mon_s").value;
        monl = document.getElementById("mon_l").value;
        monsn = document.getElementById("mon_sn").value;
        mond = document.getElementById("mon_d").value;

        var mb = document.createElement("p");
        mb.appendChild(document.createTextNode("Breakfast: " + monb));
        mealPlanDiv.append(mb);

        var ms = document.createElement("p");
        ms.appendChild(document.createTextNode("Snack: " + mons));
        mealPlanDiv.append(ms);

        var ml = document.createElement("p");
        ml.appendChild(document.createTextNode("Lunch: " + monl));
        mealPlanDiv.append(ml);

        var msn = document.createElement("p");
        msn.appendChild(document.createTextNode("Snack: " + monsn));
        mealPlanDiv.append(msn);

        var md = document.createElement("p");
        md.appendChild(document.createTextNode("Dinner: " + mond));
        mealPlanDiv.append(md);

        /*Tuesday*/

        var t_day = document.createElement("h1");
        t_day.appendChild(document.createTextNode("TUESDAY"));
        mealPlanDiv.appendChild(t_day);

        tueb = document.getElementById("tue_b").value;
        tues = document.getElementById("tue_s").value;
        tuel = document.getElementById("tue_l").value;
        tuesn = document.getElementById("tue_sn").value;
        tued = document.getElementById("tue_d").value;

        var tb = document.createElement("p");
        tb.appendChild(document.createTextNode("Breakfast: " + tueb));
        mealPlanDiv.append(tb);

        var ts = document.createElement("p");
        ts.appendChild(document.createTextNode("Snack: " + tues));
        mealPlanDiv.append(ts);

        var tl = document.createElement("p");
        tl.appendChild(document.createTextNode("Lunch: " + tuel));
        mealPlanDiv.append(tl);

        var tsn = document.createElement("p");
        tsn.appendChild(document.createTextNode("Snack: " + tuesn));
        mealPlanDiv.append(tsn);

        var td = document.createElement("p");
        td.appendChild(document.createTextNode("Dinner: " + tued));
        mealPlanDiv.append(td);

        /*Wednesday*/

        var w_day = document.createElement("h1");
        w_day.appendChild(document.createTextNode("WEDNESDAY"));
        mealPlanDiv.appendChild(w_day);

        wedb = document.getElementById("wed_b").value;
        weds = document.getElementById("wed_s").value;
        wedl = document.getElementById("wed_l").value;
        wedsn = document.getElementById("wed_sn").value;
        wedd = document.getElementById("wed_d").value;

        var wb = document.createElement("p");
        wb.appendChild(document.createTextNode("Breakfast: " + wedb));
        mealPlanDiv.append(wb);

        var ws = document.createElement("p");
        ws.appendChild(document.createTextNode("Snack: " + weds));
        mealPlanDiv.append(ws);

        var wl = document.createElement("p");
        wl.appendChild(document.createTextNode("Lunch: " + wedl));
        mealPlanDiv.append(wl);

        var wsn = document.createElement("p");
        wsn.appendChild(document.createTextNode("Snack: " + wedsn));
        mealPlanDiv.append(wsn);

        var wd = document.createElement("p");
        wd.appendChild(document.createTextNode("Dinner: " + wedd));
        mealPlanDiv.append(wd);

        /*Thursday*/

        var th_day = document.createElement("h1");
        th_day.appendChild(document.createTextNode("THURSDAY"));
        mealPlanDiv.appendChild(th_day);

        thub = document.getElementById("thu_b").value;
        thus = document.getElementById("thu_s").value;
        thul = document.getElementById("thu_l").value;
        thusn = document.getElementById("thu_sn").value;
        thud = document.getElementById("thu_d").value;

        var thb = document.createElement("p");
        thb.appendChild(document.createTextNode("Breakfast: " + thub));
        mealPlanDiv.append(thb);

        var ths = document.createElement("p");
        ths.appendChild(document.createTextNode("Snack: " + thus));
        mealPlanDiv.append(ths);

        var thl = document.createElement("p");
        thl.appendChild(document.createTextNode("Lunch: " + thul));
        mealPlanDiv.append(thl);

        var thsn = document.createElement("p");
        thsn.appendChild(document.createTextNode("Snack: " + thusn));
        mealPlanDiv.append(thsn);

        var thd = document.createElement("p");
        thd.appendChild(document.createTextNode("Dinner: " + thud));
        mealPlanDiv.append(thd);

        /*Friday*/

        var f_day = document.createElement("h1");
        f_day.appendChild(document.createTextNode("FRIDAY"));
        mealPlanDiv.appendChild(f_day);

        frib = document.getElementById("fri_b").value;
        fris = document.getElementById("fri_s").value;
        fril = document.getElementById("fri_l").value;
        frisn = document.getElementById("fri_sn").value;
        frid = document.getElementById("fri_d").value;

        var fb = document.createElement("p");
        fb.appendChild(document.createTextNode("Breakfast: " + frib));
        mealPlanDiv.append(fb);

        var fs = document.createElement("p");
        fs.appendChild(document.createTextNode("Snack: " + fris));
        mealPlanDiv.append(fs);

        var fl = document.createElement("p");
        fl.appendChild(document.createTextNode("Lunch: " + fril));
        mealPlanDiv.append(fl);

        var fsn = document.createElement("p");
        fsn.appendChild(document.createTextNode("Snack: " + frisn));
        mealPlanDiv.append(fsn);

        var fd = document.createElement("p");
        fd.appendChild(document.createTextNode("Dinner: " + frid));
        mealPlanDiv.append(fd);

        /*Saturday*/

        var sa_day = document.createElement("h1");
        sa_day.appendChild(document.createTextNode("SATURDAY"));
        mealPlanDiv.appendChild(sa_day);

        satb = document.getElementById("sat_b").value;
        sats = document.getElementById("sat_s").value;
        satl = document.getElementById("sat_l").value;
        satsn = document.getElementById("sat_sn").value;
        satd = document.getElementById("sat_d").value;

        var sab = document.createElement("p");
        sab.appendChild(document.createTextNode("Breakfast: " + satb));
        mealPlanDiv.append(sab);

        var sas = document.createElement("p");
        sas.appendChild(document.createTextNode("Snack: " + sats));
        mealPlanDiv.append(sas);

        var sal = document.createElement("p");
        sal.appendChild(document.createTextNode("Lunch: " + satl));
        mealPlanDiv.append(sal);

        var sasn = document.createElement("p");
        sasn.appendChild(document.createTextNode("Snack: " + satsn));
        mealPlanDiv.append(sasn);

        var sad = document.createElement("p");
        sad.appendChild(document.createTextNode("Dinner: " + satd));
        mealPlanDiv.append(sad);

        /*Sunday*/

        var su_day = document.createElement("h1");
        su_day.appendChild(document.createTextNode("SUNDAY"));
        mealPlanDiv.appendChild(su_day);

        sunb = document.getElementById("sun_b").value;
        suns = document.getElementById("sun_s").value;
        sunl = document.getElementById("sun_l").value;
        sunsn = document.getElementById("sun_sn").value;
        sund = document.getElementById("sun_d").value;

        var sub = document.createElement("p");
        sub.appendChild(document.createTextNode("Breakfast: " + sunb));
        mealPlanDiv.append(sub);

        var sus = document.createElement("p");
        sus.appendChild(document.createTextNode("Snack: " + suns));
        mealPlanDiv.append(sus);

        var sul = document.createElement("p");
        sul.appendChild(document.createTextNode("Lunch: " + sunl));
        mealPlanDiv.append(sul);

        var susn = document.createElement("p");
        susn.appendChild(document.createTextNode("Snack: " + sunsn));
        mealPlanDiv.append(susn);

        var sud = document.createElement("p");
        sud.appendChild(document.createTextNode("Dinner: " + sund));
        mealPlanDiv.append(sud);

        flyWindow.document.body.appendChild(mealPlanDiv);
        }
}

document.getElementById('clearAll').addEventListener('click',clear)
function clear() {
    /*Breakfast*/
    const mon_b = document.getElementById('mon_b');
    mon_b.value = '';

    const tue_b = document.getElementById('tue_b');
    tue_b.value = '';

    const wed_b = document.getElementById('wed_b');
    wed_b.value = '';

    const thu_b = document.getElementById('thu_b');
    thu_b.value = '';

    const fri_b = document.getElementById('fri_b');
    fri_b.value = '';

    const sat_b = document.getElementById('sat_b');
    sat_b.value = '';

    const sun_b = document.getElementById('sun_b');
    sun_b.value = '';

    /*Snack*/
    const mon_s = document.getElementById('mon_s');
    mon_s.value = '';

    const tue_s = document.getElementById('tue_s');
    tue_s.value = '';

    const wed_s = document.getElementById('wed_s');
    wed_s.value = '';

    const thu_s = document.getElementById('thu_s');
    thu_s.value = '';

    const fri_s = document.getElementById('fri_s');
    fri_s.value = '';

    const sat_s = document.getElementById('sat_s');
    sat_s.value = '';

    const sun_s = document.getElementById('sun_s');
    sun_s.value = '';

    /*Lunch*/
    const mon_l = document.getElementById('mon_l');
    mon_l.value = '';

    const tue_l = document.getElementById('tue_l');
    tue_l.value = '';

    const wed_l = document.getElementById('wed_l');
    wed_l.value = '';

    const thu_l = document.getElementById('thu_l');
    thu_l.value = '';

    const fri_l = document.getElementById('fri_l');
    fri_l.value = '';

    const sat_l = document.getElementById('sat_l');
    sat_l.value = '';

    const sun_l = document.getElementById('sun_l');
    sun_l.value = '';

    /*Snack*/
    const mon_sn = document.getElementById('mon_sn');
    mon_sn.value = '';

    const tue_sn = document.getElementById('tue_sn');
    tue_sn.value = '';

    const wed_sn = document.getElementById('wed_sn');
    wed_sn.value = '';

    const thu_sn = document.getElementById('thu_sn');
    thu_sn.value = '';

    const fri_sn = document.getElementById('fri_sn');
    fri_sn.value = '';

    const sat_sn = document.getElementById('sat_sn');
    sat_sn.value = '';

    const sun_sn = document.getElementById('sun_sn');
    sun_sn.value = '';

    /*Dinner*/
    const mon_d = document.getElementById('mon_d');
    mon_d.value = '';

    const tue_d = document.getElementById('tue_d');
    tue_d.value = '';

    const wed_d = document.getElementById('wed_d');
    wed_d.value = '';

    const thu_d = document.getElementById('thu_d');
    thu_d.value = '';

    const fri_d = document.getElementById('fri_d');
    fri_d.value = '';

    const sat_d = document.getElementById('sat_d');
    sat_d.value = '';

    const sun_d = document.getElementById('sun_d');
    sun_d.value = '';

    }