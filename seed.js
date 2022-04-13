const { db, User, Recipe, Ingredient } = require("./server/db");

const seed = async () => {
    const users = [
        {username: "un-banana", password: "pw-banana"}
    ]
    const recipes = [
        {recipename: "rn-banana"}
    ]
    const ingredients = [
        {ingredientname: "in-banana", ingredientammount: 1},
        {ingredientname: "in-grapefruit", ingredientammount: 2}
    ]

    try {
        await db.sync({ force: true });
        // seed your database here!
        await Promise.all(users.map(user => User.create(user)))
        await Promise.all(recipes.map(recipe => Recipe.create(recipe)))
        await Promise.all(ingredients.map(student => Ingredient.create(student)))
        console.log('SEEDED')
      } catch (err) {
        console.log("ERROR",err);
      }
}
seed()