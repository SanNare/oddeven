function oddeven()
                {
                        var seq = document.getElementById("seq").value;
                        var ar = seq.split(" ");
                        var i,osum = 0,esum = 0;
                        var oddsum = document.getElementById("oddsum");
                        var evensum = document.getElementById("evensum");
                        for(i = 0;i<ar.length;i++)
                        {
                        	var x = parseInt(ar[i]);
                        	if(x%2 == 0)
                        		esum+=x;
                        	else
                        		osum+=x;
                        }
                        oddsum.value = osum;
                        evensum.value = esum;
                        
                }