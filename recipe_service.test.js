const RecipeService = require("./recipe_service");

describe("RecipeService", () => {
    describe("#searchRecipes", () => {
        test("It returns 5 recipes based on the search term", async () => {
            const subject = new RecipeService()
            const result = await subject.searchRecipes("salad")
            console.log(result)
            expect(result.length).toEqual(20);
        });
    })
})