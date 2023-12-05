"use client"

import {useEffect, useState} from "react";
import {Category} from "@/components/Category";
import {CategoryType} from "@/types";

export default function Board() {
    const [categories, setCategories] = useState<CategoryType[]>([]);

    const fetchCategories = async () => {
        let offset = Math.floor(Math.random() * 28175) + 1;
        const categoryUrl = `https://jservice.io/api/categories?count=5&offset=${offset}`;

        try {
            const categoryResponse = await fetch(categoryUrl);
            return await categoryResponse.json();
        } catch (error) {
            console.error(error);
            return [];
        }
    };

    useEffect(() => {
        (async () => {
            const fetchedCategories = await fetchCategories();
            setCategories(fetchedCategories);
        })();
    }, []);

    return (
        <main className="flex justify-center items-center">
            {categories.map((category, key) => (
                <Category key={key} id={category.id} category={category.title}/>
            ))}
        </main>
    );
}
