import React from 'react'
import { useTheme } from 'next-themes';


export default function ExampleComponent()
{
    const { theme, setTheme } = useTheme();

    return (
        <div className="
        flex flex-col p-24 w-50 mx-auto shadow-lg rounded-lg
        dark:border-2 border-gray-600
        ">
            <h1 class="font-bold text-2xl mb-6">This is a quick example of how to implement dark mode</h1>

            <p class="mb-6">I followed this tutorial for implementation: <a class="
                text-blue-500 underline
                dark:text-yellow-400"
                    target="_blank" href="https://dev.to/thomasledoux1/easy-way-to-use-dark-mode-in-next-js-tailwind-2ob1">link</a>
            </p>

			<button
				aria-label="Toggle Dark Mode"
				type="button"
                className="
                bg-blue-500 text-white py-4 px-6 self-start rounded-xl
                dark:bg-gray-800 dark:border dark:border-gray-400
                "
				onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
				Toggle dark mode!
			</button>
		</div>
    )
}
