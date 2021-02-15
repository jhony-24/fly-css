import { getUniqueKeysFromArray } from "../utils";

describe('Utils', () => {
		it('should get keys not repeating', () => {
			const testData  = [
				"a1",
				"b1", 
				"c1",
				"c1",
				"c1",
			]
			const expectedArray = [ "a1", "b1" , "c1"];
			const uniqueKeysFromArray = getUniqueKeysFromArray(testData);
			expect(uniqueKeysFromArray).toEqual(expectedArray);
			expect(uniqueKeysFromArray).toHaveLength(expectedArray.length);
		});

		it('should have classes original', () => {
			const testData  = [
				"a1",
				"b1", 
			]
			const expectedArray = [ "a1", "b1" ];
			const uniqueKeysFromArray = getUniqueKeysFromArray(testData);
			expect(uniqueKeysFromArray).toEqual(expectedArray);
			expect(uniqueKeysFromArray).toHaveLength(expectedArray.length);
		});


		
		it('Should return a empty array', () => {
			let values = [ undefined, null, {} ]
			values.forEach((value) => {
				expect(getUniqueKeysFromArray(value)).toEqual([]);
			})
		})

})

