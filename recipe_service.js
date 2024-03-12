class RecipeService {
    static BASEURL = "https://api.edamam.com/api/recipes/v2"
    static AUTHPARAMS = `app_id=${process.env.EDAMAM_APPLICATION_ID}&app_key=${process.env.EDAMAM_APPLICATION_KEY}`
    async searchRecipes(searchTerm) {
        const fullURL = RecipeService.BASEURL + "?" + RecipeService.AUTHPARAMS + "&type=public&q=" + searchTerm
        const response = await fetch(fullURL, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/JSON"
            }
        })
        const responseObj = response.json()
        debugger
        return responseObj["hits"]
    }
}
module.exports = RecipeService