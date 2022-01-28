import { useEffect } from 'react';
import { useRef, useState } from 'react';
import { submitComment } from "../../services"

function CommentForm({ slug }) {
    const [error, setError] = useState<boolean>(false)
    const [localStorage, setLocalStorage] = useState<string | null>(null)
    const [showSuccessMessage, setShowSuccessMessages] = useState<boolean>(false)

    const commentEl = useRef<HTMLTextAreaElement | null>()
    const nameEl = useRef<HTMLInputElement | null>()
    const emailEl = useRef<HTMLInputElement | null>()
    const storeDataEl = useRef<HTMLInputElement | null>()

    // Get Data from localStorage if user checked the checkbox down below
    useEffect(() => {
        nameEl.current.value = window.localStorage.getItem("name")
        emailEl.current.value = window.localStorage.getItem("email")
    }, [])

    // Comment submission function
    const handleCommentSubmission = () => {
        setError(false)
        const { value: comment } = commentEl.current;
        const { value: name } = nameEl.current;
        const { value: email } = emailEl.current;
        const { checked: storeData } = storeDataEl.current

        if (!comment || !name || !email) {
            setError(true)
            return
        }
        const commentObj = { name, comment, email, slug }

        if (storeData) {
            window.localStorage.setItem("name", name)
            window.localStorage.setItem("email", email)
        }
        else {
            window.localStorage.removeItem("name")
            window.localStorage.removeItem("email")
        }

        // firing the query to submit comment
        submitComment(commentObj)
            .then((res) => {
                setShowSuccessMessages(true)
                setTimeout(() => {
                    setShowSuccessMessages(false)
                }, 3000)
            })
    }

    return (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4"> Comments Form </h3>
            <div className="grid grid-cols-1 gap-4 mb-4">
                <textarea
                    ref={commentEl}
                    className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                    placeholder='Comment'
                    name="comment"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <input
                    ref={nameEl}
                    className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                    placeholder='Name'
                    name="name"
                />
                <input
                    ref={emailEl}
                    className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                    placeholder='Email'
                    name="email"
                />
            </div>

            <div className="grid grid-cols-1 gap-4 mb-4">
                <div>
                    <input ref={storeDataEl} className="cursor-pointer" type="checkbox" id="storeData" name="storedata" value="true" /> {" "}
                    <label className="text-gray-500" htmlFor='storeData'>Save my email and name for the next time I comment</label>
                </div>
            </div>

            <div className="mt-8">
                {showSuccessMessage && <p className="text-xl float-right font-semibold mt-3 text-green-500"> Comment submitted fo review </p>}

                {error && <p className='text-red-700'>Something went wrong</p>}

                <button onClick={handleCommentSubmission}
                    className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-white rounded-full text-xl px-8 py-3 cursor-pointer"
                >
                    Post Comment
                </button>
            </div>
        </div>
    )
}

export default CommentForm;