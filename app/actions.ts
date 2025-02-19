"use server"

const buildQueryParams = (params: any) => {
    return Object.keys(params)
        .map(key => {
            if (Array.isArray(params[key])) {
                return params[key].map(val => `${encodeURIComponent(key)}[]=${encodeURIComponent(val)}`).join("&");
            } else if (typeof params[key] === "object" && params[key] !== null) {
                return `${encodeURIComponent(key)}=${encodeURIComponent(JSON.stringify(params[key]))}`;
            } else {
                return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
            }
        })
        .join("&");
};

export async function createTask(prevState: any, formData: FormData) {
    const apiUrl = `https://deadlinetaskbot.productlove.ru/api/v1/tasks/client/newhardtask`

    const params = {
        token: formData.get("token") as string,
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        tags: formData.get("tags") as string,
        budget_from: formData.get("budget_from") as string,
        budget_to: formData.get("budget_to") as string,
        deadline: formData.get("deadline") as string,
        number_of_reminders: formData.get("number_of_reminders") as string,
        private_content: formData.get("private_content") as string,
        is_hard: formData.get("is_hard") as string,
        all_auto_responses: formData.get("all_auto_responses") as string,
        rules: {
            budget_from: formData.get("rules_budget_from") as string,
            budget_to: formData.get("rules_budget_to") as string,
            deadline_days: formData.get("rules_deadline_days") as string,
            qty_freelancers: formData.get("qty_freelancers") as string,
            task_id: formData.get("task_id") as string
        }
    }

    const queryString = buildQueryParams(params) 

    const url = `${apiUrl}?${queryString}`

    try {
        const response = await fetch(url, {
            method: "GET",
        })

        if (response.status === 200) {
            return { message: "Задача опубликована успешно!" }
        } else {
            return { message: `Ошибка: ${response.statusText}` }
        }
    } catch (error) {
        return { message: `Ошибка: ${error instanceof Error ? error.message : String(error)}` }
    }
}


