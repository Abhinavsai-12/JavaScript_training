var body=document.getElementsByTagName("body")[0];
        body.style.display="flex";
        body.style.flexDirection="column";
        body.style.width="98vw";
        body.style.height="98vh";
        body.style.justifyContent="center";
        body.style.alignItems="center";
        body.style.gap="10px";

        var head1=document.createElement("h1");
        head1.innerText="Color Genrator";
        head1.style.fontSize="28px";
        document.body.appendChild(head1);

        var area=document.createElement("div");
        area.style.width="50%";
        area.style.height="50vh";
        area.style.border="3px solid black";
        area.style.color="white";
        document.body.appendChild(area);

        var btn=document.createElement("button");
        btn.innerText="Click Here to Change Color";
        btn.style.fontSize="15px";
        btn.addEventListener("click", cg);
        document.body.appendChild(btn);


        var count=0;
        var arr=['black','skyblue','lightgreen','grey','blue'];
        function cg(){
            area.style.backgroundColor=arr[count]; 
            count++;
            if(count>=arr.length){
                count=0;
            }
        }

