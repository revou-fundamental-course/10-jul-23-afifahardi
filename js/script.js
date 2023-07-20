function hitung(){

    if(usia.value==''|| tb.value=='' || bb.value=='' || (pria.checked==false && wanita.checked==false)){
        alert("All fields are required!");
    } else {
        proses();
    }
}

    
    function proses(){
        var tb, bb, keterangan, bmi;
        tb = parseFloat(document.getElementById("tb").value);
        tb /= 100;
        bb = parseFloat(document.getElementById("bb").value);
        bmi = bb / (tb * tb);
        if(bmi>= 30 ){
            keterangan = "Obesitas <br> Konsultasikan dengan dokter atau ahli gizi untuk mengatur program penurunan berat badan yang tepat.";
        }else if ((bmi >=25.0)&(bmi<=29.9)) {
            keterangan = "Kelebihan Berat Badan <br> Pertimbangkan untuk mengurangi berat badan dengan sehat.";
        }else if((bmi >= 18.5)&(bmi <= 25)){
            keterangan ="Normal <br> Anda berada dalam rentang berat badan yang sehat.";
        }else if (bmi<= 18.5){
            keterangan = "kekurangan berat badan <br> Pertimbangkan untuk meningkatkan berat badan dengan sehat.";
        }

        document.getElementById('bmi').innerHTML = "BMI Anda : " + bmi.toFixed(1);
        document.getElementById('keterangan').innerHTML = "keterangan :" + keterangan;
    }
