"use client"

import { createTask } from "@/app/actions"
import type React from "react"

import { useState, useEffect } from "react"
import { useActionState } from "react"

export default function TaskForm() {
    const [token, setToken] = useState("")
    const [formState, formAction] = useActionState(createTask, { message: "" })

    useEffect(() => {
        const storedToken = localStorage.getItem("taskToken")
        if (storedToken) {
            setToken(storedToken)
        }
    }, [])

    const handleTokenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newToken = e.target.value
        setToken(newToken)
        localStorage.setItem("taskToken", newToken)
    }

    useEffect(() => {
        if(formState.message) {
            alert(formState.message)
        }
    }, [formState.message])

    return (
        <form action={formAction} className="space-y-6">
            <div>
                <label htmlFor="token" className="block text-sm font-medium text-white">
                    Токен
                </label>
                <input
                    type="text"
                    id="token"
                    name="token"
                    value={token}
                    onChange={handleTokenChange}
                    required
                    className="mt-1 h-10 px-3 bg-gray-800 text-white block w-full rounded-md shadow-sm focus:outline-none focus:ring-2 transition duration-500"
                />
            </div>
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-white">
                    Название
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    className="mt-1 h-10 px-3 bg-gray-800 text-white block w-full rounded-md shadow-sm focus:outline-none focus:ring-2 transition duration-500"
                />
            </div>
            <div>
                <label htmlFor="description" className="block text-sm font-medium text-white">
                    Описание
                </label>
                <textarea
                    id="description"
                    name="description"
                    required
                    className="mt-1 block w-full p-3 bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 transition duration-500"
                ></textarea>
            </div>
            <div>
                <label htmlFor="tags" className="block text-sm font-medium text-white">
                    Теги (разделены запятыми)
                </label>
                <input
                    type="text"
                    id="tags"
                    name="tags"
                    required
                    className="mt-1 h-10 px-3 bg-gray-800 text-white block w-full rounded-md shadow-sm focus:outline-none focus:ring-2 transition duration-500"
                />
            </div>
            <div>
                <label htmlFor="budget_from" className="block text-sm font-medium text-white">
                    Бюджет от
                </label>
                <input
                    type="number"
                    id="budget_from"
                    name="budget_from"
                    required
                    min="0"
                    className="mt-1 h-10 px-3 bg-gray-800 text-white block w-full rounded-md shadow-sm focus:outline-none focus:ring-2 transition duration-500"
                />
            </div>
            <div>
                <label htmlFor="budget_to" className="block text-sm font-medium text-white">
                    Бюджет до
                </label>
                <input
                    type="number"
                    id="budget_to"
                    name="budget_to"
                    required
                    min="0"
                    className="mt-1 h-10 px-3 bg-gray-800 text-white block w-full rounded-md shadow-sm focus:outline-none focus:ring-2 transition duration-500"
                />
            </div>
            <div>
                <label htmlFor="deadline" className="block text-sm font-medium text-white">
                    Дедлайн (день)
                </label>
                <input
                    type="number"
                    id="deadline"
                    name="deadline"
                    required
                    min="1"
                    className="mt-1 h-10 px-3 bg-gray-800 text-white block w-full rounded-md shadow-sm focus:outline-none focus:ring-2 transition duration-500"
                />
            </div>
            <div>
                <label htmlFor="number_of_reminders" className="block text-sm font-medium text-white">
                    Количество напоминаний
                </label>
                <input
                    type="number"
                    id="number_of_reminders"
                    name="number_of_reminders"
                    required
                    min="1"
                    className="mt-1 h-10 px-3 bg-gray-800 text-white block w-full rounded-md shadow-sm focus:outline-none focus:ring-2 transition duration-500"
                />
            </div>
            <div>
                <label htmlFor="private_content" className="block text-sm font-medium text-white">
                    Приватный контент
                </label>
                <input
                    type="text"
                    id="private_content"
                    name="private_content"
                    className="mt-1 h-10 px-3 bg-gray-800 text-white block w-full rounded-md shadow-sm focus:outline-none focus:ring-2 transition duration-500"
                />
            </div>
            
            <div>
                <label htmlFor="is_hard" className="block text-sm font-medium text-white">
                    Трудно
                </label>
                <select
                    id="is_hard"
                    name="is_hard"
                    required
                    className="mt-1 h-10 px-3 bg-gray-800 text-white block w-full rounded-md shadow-sm focus:outline-none focus:ring-2 transition duration-500"
                >
                <option value="true">Да</option>
                <option value="false">Нет</option>
                </select>
            </div>
            <div>
                <label htmlFor="all_auto_responses" className="block text-sm font-medium text-white">
                    Все автоответы
                </label>
                <select
                    id="all_auto_responses"
                    name="all_auto_responses"
                    required
                    className="mt-1 h-10 px-3 bg-gray-800 text-white block w-full rounded-md shadow-sm focus:outline-none focus:ring-2 transition duration-500"
                >
                <option value="true">Да</option>
                <option value="false">Нет</option>
                </select>
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Правила</h3>
            <div>
                <label htmlFor="rules_budget_from" className="block text-sm font-medium text-white">
                    Бюджет от
                </label>
                <input
                    type="number"
                    id="rules_budget_from"
                    name="rules_budget_from"
                    required
                    min="0"
                    className="mt-1 h-10 px-3 bg-gray-800 text-white block w-full rounded-md shadow-sm focus:outline-none focus:ring-2 transition duration-500"
                />
            </div>
            <div>
                <label htmlFor="rules_budget_to" className="block text-sm font-medium text-white">
                    Бюджет до
                </label>
                <input
                    type="number"
                    id="rules_budget_to"
                    name="rules_budget_to"
                    required
                    min="0"
                    className="mt-1 h-10 px-3 bg-gray-800 text-white block w-full rounded-md shadow-sm focus:outline-none focus:ring-2 transition duration-500"
                />
            </div>
            <div>
                <label htmlFor="rules_deadline_days" className="block text-sm font-medium text-white">
                    Дедлайн (день)
                </label>
                <input
                    type="number"
                    id="rules_deadline_days"
                    name="rules_deadline_days"
                    required
                    min="1"
                    className="mt-1 h-10 px-3 bg-gray-800 text-white block w-full rounded-md shadow-sm focus:outline-none focus:ring-2 transition duration-500"
                />
            </div>
            <div>
                <label htmlFor="qty_freelancers" className="block text-sm font-medium text-white">
                    Количество фрилансеров
                </label>
                <input
                    type="number"
                    id="qty_freelancers"
                    name="qty_freelancers"
                    required
                    min="1"
                    className="mt-1 h-10 px-3 bg-gray-800 text-white block w-full rounded-md shadow-sm focus:outline-none focus:ring-2 transition duration-500"
                />
            </div>
            <div>
                <label htmlFor="task_id" className="block text-sm font-medium text-white">
                    Task id
                </label>
                <input
                    type="number"
                    id="task_id"
                    name="task_id"
                    required
                    min="1"
                    className="mt-1 h-10 px-3 bg-gray-800 text-white block w-full rounded-md shadow-sm focus:outline-none focus:ring-2 transition duration-500"
                />
            </div>
            <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500  hover: focus:outline-none -2 -offset-"
            >
                Создать заказ
            </button>
        </form>
    )
}

