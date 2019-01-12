
          function isPalindrome(s){
                   var stack=[];
                var i=0;
                while(i<s.length/2){
                    stack.push(s.charAt(i));

                            i++;
                }
                if(i%2===1){
                   i++; 
                }
                i--;
                while(i<s.length){
                        if(s.charAt(i)!==stack.pop()){
                            return false;
                        }
                    i++;
                }

          return true;
          }

            var s1="HabrggrbaH";
            var s2="HabrgfgrbaH";
            var s3="fddfvdc";

          console.log(s1 + " " +isPalindrome(s1));
          console.log(s2 + " " +isPalindrome(s2));
          console.log(s3 + " " +isPalindrome(s3));
