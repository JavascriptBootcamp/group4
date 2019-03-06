			Array.prototype.min = function()
			{
				return Math.min.apply(null, this);
			}
			
			Array.prototype.max = function()
			{
				 return Math.max.apply(null, this);
			}
			
			var arr = [1, 22, 50, 7];
			var minimum = arr.min();
			var maximum = arr.max();
			console.log("Minimum:", minimum, "Maximum:", maximum);
		
