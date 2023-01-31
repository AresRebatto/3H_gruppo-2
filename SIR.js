//Prima Flash Card
var FrstCardTtl = document.getElementById("FrstCardTtl");
var FrstCard = document.getElementById("FrstCard");
//Seconda Flash Card
var ScndCardTtl = document.getElementById("ScndCardTtl");
var ScndCard = document.getElementById("ScndCard");
//Terza Flash Card
var ThrdCardTtl = document.getElementById("ThrdCardTtl");
var ThrdCard = document.getElementById("ThrdCard");

rnd = Math.round(Math.random()*7);

switch(rnd)
  {
    case 0:
      FrstCardTtl.innerHTML="BOOTSTRAP";
      FrstCard.innerHTML="Con bootrastrap si fa riferimento a tutte le fasi che portano all’avvio del Sistema Operativo di un computer";
      
      ScndCardTtl.innerHTML="RAID";
      ScndCard.innerHTML="Un Raid consiste nell’avere più dischi fisici uniti insieme in modo tale che la macchina veda una sola memoria più grande";

      ThrdCardTtl.innerHTML="HTML";
      ThrdCard.innerHTML="Viene sviluppato agli inizi degli anni ‘90 da Tim Berners-Lee al CERN in Svizzera insieme al protocollo HTTP, ovvero un protocollo per il trasferinento di dati nel suddetto formato";
    break;


    case 1:
      FrstCardTtl.innerHTML="SCHERMI LED";
      FrstCard.innerHTML="E' un tipo di schermo in cui a ogni pixel corrispondono tre diodi responsabili ognuno di un colore: uno rosso, uno verde e uno blu";
      
      ScndCardTtl.innerHTML="SISTEMA OPERATIVO";
      ScndCard.innerHTML="Il sistema operativo ha una struttura detta a cipolla che parte dal centro col Kernel per poi finire all'esterno coi programmi applicativi";

      ThrdCardTtl.innerHTML="INDIRIZZO IP";
      ThrdCard.innerHTML="Si tratta di un indirizzo assegnato a un'interfaccia, come una scheda di rete, di un dispositivo detto host che utilizza l'Internet Protocol come protocollo di rete";
    break;

    case 2:
      FrstCardTtl.innerHTML="FIRMWARE";
      FrstCard.innerHTML="Il primo programma che viene eseguito sul computer è il Firmware, scritto solitamente sulla ROM. In passato avevamo il BIOS che viene sostituito nel 2010 dall'UEFI";
      
      ScndCardTtl.innerHTML="E-INK";
      ScndCard.innerHTML="E' un tipo di schermo che si basa sull'elettroforesi di particelle nere e bianche, ovvero lo spostamento di queste particelle al fine di creare un'immagine";

      ThrdCardTtl.innerHTML="SSD";
      ThrdCard.innerHTML="Sono un tipo di memorie non volatili molto più rapide degli HDD perché salvano i dati, sottofoforma di bit, tramite la tensione di corrente conservata grazie a dei componenti detti mosfet";
    break;

    case 3:
      FrstCardTtl.innerHTML="ADDRESS BUS";
      FrstCard.innerHTML="Si occupa di trasportare gli indirizzi degli specifici dati, ovvero le coordinate dov'è possibile trovare il suddetto dato";
      
      ScndCardTtl.innerHTML="ALU";
      ScndCard.innerHTML="l'ALU (L'unità logica-aritmetica) è quella che nella CPU si occupa di svolgere i calcoli richiesti";

      ThrdCardTtl.innerHTML="HDD";
      ThrdCard.innerHTML="Sono un tipo di memore non volatili che sfruttano i principi dell'elettromangetismo per scrivere e leggere dati su una serie di dischi impilati e ricoperti di un materiale ferromagnetico";
    break;

    case 4:
      FrstCardTtl.innerHTML="DATA BUS";
      FrstCard.innerHTML="Si occupa di trasportare gli effettivi dato da una parte all'altra. Richiede perciò un maggior numero di bit trasportabili rispetto agli altri bus";
      
      ScndCardTtl.innerHTML="CLOCK";
      ScndCard.innerHTML="E' una sorta di orologio interno alla CPU che si occupa di sincronizzare tutti i processi";

      ThrdCardTtl.innerHTML="CACHE";
      ThrdCard.innerHTML="La cachè è una memoria volatile molto piccola e veloce interna alla CPU dove vengono salvati i dati più richiesti in modo da velocizzare i processi di elaborazione";
    break;

    case 5:
      FrstCardTtl.innerHTML="CONTROL BUS";
      FrstCard.innerHTML="Questi si occupano di trasportare le istruzioni della CPU e si occupano anche di verificare le condizioni delle periferiche";
      
      ScndCardTtl.innerHTML="FREQUENZA DI CLOCK";
      ScndCard.innerHTML="E' il valore che ci dice quante volte la CPU esegue dei processi: è quindi l'indicatore della velocità del processore";

      ThrdCardTtl.innerHTML="RAM";
      ThrdCard.innerHTML="La RAM è una memoria volatile che ha lo scopo di mantenere dei dati in modo da velocizzare i processi svolti dalla CPU";
    break;

    case 6:
      FrstCardTtl.innerHTML="SYSTEM BUS";
      FrstCard.innerHTML="Si riferisce al complesso di tutti i tipi di bus presenti all'interno di una macchina: Data Bus, Adress Bus e Control Bus";
      
      ScndCardTtl.innerHTML="CORE";
      ScndCard.innerHTML="Una CPU può avere più unità di microprocessori detti Core. Questi si occupano di frammentare il lavoro della CPU lavorando in parallelo";

      ThrdCardTtl.innerHTML="ROM";
      ThrdCard.innerHTML="E' una memoria di sola lettura in cui è contenuto il Firmware";
    break;

    case 7:
      FrstCardTtl.innerHTML="LIVELLI DI CACHE";
      FrstCard.innerHTML="Ogni core ha due livelli di cache in cui salvare i dati. Si ha poi un terno livello che è una cache comune a tutti i core";
      
      ScndCardTtl.innerHTML="SUDDIVISIONE DISCHI";
      ScndCard.innerHTML="I dischi degli Hard Disk vengono suddvisi in tracce, ovvero una serie di circonferenze sempre più piccole, e settori, ovvero degli 'spicchi' di egual misura";

      ThrdCardTtl.innerHTML="MACCHINA DI VON NUEMANN";
      ThrdCard.innerHTML=" E' una delle prime architetture Hardware che comprende la CPU, i BUS,  la memoria centrale e le periferiche di input/output";
    break;
  }