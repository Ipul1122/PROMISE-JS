// ------------------------------------------------------------------------------------//
// ------------------------------------------------------------------------------------//

        // ENGLISH
     
        function walkCat (){

            return new Promise((resolve, reject)=>{
                setTimeout(()=>{

                    const catWalked = true;

                    if(catWalked){
                        resolve("CAT WALKED");
                    }else {
                        reject("CAT NOT WALKED");
                    }
                    
                    resolve("YOU WALK THE CAT");
                },1500);
            });
        }
        
        function cleanRoom (){
            
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    
                    const roomIsClear = true

                    if(roomIsClear){
                        resolve("ROOM IS CLEAR");
                    }else {
                        reject("ROOM IS NOT CLEAR");
                    }
                    
                    resolve("YOU CLEAN THE ROOM");
                },3000);
            });
        }
        
        function takeTrash (){
            
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    
                    const takingOutTrash = true
            
                    if(takingOutTrash){
                        resolve("TRASH IS TAKING OUT");
                    }else {
                        reject("TRASH IS NOT TAKING OUT");
                    }

                    resolve("YOU TAKE OUT THE TRASH");
                },1000);
            });
        }

        walkCat().then(value => {console.log(value); return cleanRoom()})
                .then(value => {console.log(value);  return takeTrash()})
                .then(value => {console.log(value); console.log("YOU FINISHED") })
                .catch(error => console.error(error));
                
                
                
                // INDONESIA      
                
                // MENDEKLARISIKAN FUNCTION berjalanDenganKucing
                function berjalanDenganKucing (){
        
                    // mengembalikan sebuah promise yang menerima 2 parameter yaitu selesaikan dan tolak
                    return new Promise((selesaikan, tolak)=>{
                        // mengatur waktu tiap 1500 ms 
                        setTimeout(()=>{
        
                            // variabel const kucingJalan = true
                            const kucingJalan = true;
        
                            // jika true
                            if(kucingJalan){
                                selesaikan("KUCING JALAN");
                                // jika false
                            }else {
                                tolak("KUCING TIDAK JALAN");
                            }
                            
                            selesaikan("LU BERJALAN DENGAN KUCING");
                        },1500);
                    });
                }
                
                function bersihkanKamar (){
                    
                    return new Promise((selesaikan, tolak)=>{
                        setTimeout(()=>{
                            
                            const kamarBersih = true
        
                            if(kamarBersih){
                                selesaikan("KAMAR BERSIH");
                            }else {
                                tolak("KAMAR TIDAK BERSIH");
                            }
                            
                            selesaikan("KAMAR SUDAH DI BERSIHKAN");
                        },3000);
                    });
                }
                
                function buangSampah (){
                    
                    return new Promise((selesaikan, tolak)=>{
                        setTimeout(()=>{
                            
                            const sampahBuang = true
                    
                            if(sampahBuang){
                                selesaikan("SAMPAH DI BUANG");
                            }else {
                                tolak("SAMPAH TIDAK DI BUANG");
                            }
        
                            selesaikan("SAMPAH SUDAH DI BUANG");
                        },1000);
                    });
                }
        
                // callback atau memanggil function berjalan dengan kucing
                // .then atau kemudian menampilkan hasil value atau isi paramater berjalanDenganKucing apakah true or false
                // return atau mengembalikan function bersihkanKamar
                // .then atau kemudian menampilkan hasil value atau isi paramater bersihkanKamar apakah true or false
                // return atau mengembalikan function buangSampah
                // .then atau kemudian menampilkan hasil value atau isi paramater buangSampah apakah true or false
                // .catch atau menangkap hasil semua nilai, jika semua telah dikerjakan maka tampilkan nilai (LU MENYELESAIKAN SEMUANYA)
                // .catch atau menangkap hasil semua nilai, jika salah satu tidak di kerjakan maka akan menampilkan error
                // .catch menggunakan metode chain
                berjalanDenganKucing().then(value => {console.log(value); return bersihkanKamar()})
                        .then(value => {console.log(value);  return buangSampah()})
                        .then(value => {console.log(value); console.log("LU MENYELESAIKAN SEMUANYA") })
                        .catch(error => console.error(error));



