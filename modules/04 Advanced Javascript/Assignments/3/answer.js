			Array.prototype.mySliceFunction = function(begin, end)
			{
				var slicedArr = [];
				for(var i = begin; i <= end; i++)
				{
					slicedArr.push(this[i]);
				}
				
				return slicedArr;
			}
			
			var arr = [1, 2, 5, 7];
			var sliced = arr.mySliceFunction(1,2);
			console.log(sliced);
