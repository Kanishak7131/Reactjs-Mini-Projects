// {
//     "publisher": "101 Cookbooks",
//     "title": "Best Pizza Dough Ever",
//     "source_url": "http://www.101cookbooks.com/archives/001199.html",
//     "recipe_id": "47746",
//     "image_url": "http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg",
//     "social_rank": 100,
//     "publisher_url": "http://www.101cookbooks.com"
// }


export default function FoodDetails({ item }) {
    return (
        <div className="w-80 overflow-hidden p-5 flex flex-col border-2 rounded-2xl gap-5 shadow-xl">
            <p className="text-xl truncate text-black">{item.title}</p>
            <div className="h-40 overflow-hidden flex justify-center item-center " >
                <img src={item.image_url} alt={item.title} className="w-full block" />
            </div>
            <button>Add to favourite</button>
        </div>
    )
}