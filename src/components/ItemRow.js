import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ItemRow = ({ icon, title, link, description }) => {
    return (
        <div class="w-full mx-auto flex p-6 bg-white rounded-lg shadow-xl m-4">
            <div class="flex-shrink-0">
                <FontAwesomeIcon icon={icon} size="4x" className={"text-yellow-700"} />
            </div>
            <div class="ml-6 pt-1 text-left">
                <h4 class="text-xl text-gray-900">{title} <a href={link} target="_blank"><FontAwesomeIcon icon={["fas", "external-link-alt"]} className={"text-blue-700 align-right"} /></a> </h4>
                <p class="text-base text-gray-600">{description}</p>


            </div>
        </div>
    )
}

export default ItemRow;
