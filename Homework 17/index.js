{
    const delay = ms => new Promise(ok => setTimeout(ok, ms));

    async function trafficLight(greenElement, yellowElement, redElement, greenTime, yellowTime, redTime) {
        while (true) {
            greenElement.style.backgroundColor = 'green';
            yellowElement.style.backgroundColor = 'black';
            redElement.style.backgroundColor = 'black';
            await delay(greenTime);
            
            greenElement.style.backgroundColor = 'black';
            yellowElement.style.backgroundColor = 'yellow';
            redElement.style.backgroundColor = 'black';
            await delay(yellowTime);
            
            greenElement.style.backgroundColor = 'black';
            yellowElement.style.backgroundColor = 'black';
            redElement.style.backgroundColor = 'red';
            await delay(redTime);
        }
    }
    
    trafficLight(green, yellow, red, 3000, 1000, 3000);
}

{
    async function speedTest(getPromise, count, parallel = 1) {
        const startTime = Date.now();
        let totalQueryDuration = 0;
    
        for (let i = 0; i < count; i++) {
            const promises = [];
            const startParallel = Date.now();
    
            for (let j = 0; j < parallel; j++) {
                promises.push(getPromise());
            }
    
            await Promise.all(promises);
    
            const endParallel = Date.now();
            totalQueryDuration += endParallel - startParallel;
        }
    
        const endTime = Date.now();
        const duration = endTime - startTime;
        const queryDuration = totalQueryDuration / (count * parallel);
        const querySpeed = 1 / queryDuration;
        const parallelDuration = totalQueryDuration / count;
        const parallelSpeed = parallel / (totalQueryDuration / 1000);
    
        return {
            duration,
            querySpeed,
            queryDuration,
            parallelSpeed,
            parallelDuration
        };
    }

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    speedTest(() => delay(1000), 10, 10).then(result => console.log(result));
    
    speedTest(() => fetch('http://swapi.dev/api/people/1').then(res => res.json()), 10, 5).then(result => console.log(result));
}

{
    async function gql(endpoint, query, variables) {
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    query: query,
                    variables: variables
                })
            });
            
            const responseData = await response.json();
            
            if (responseData.errors) {
                throw new Error(responseData.errors[0].message);
            }
            
            return responseData.data;
        } catch (error) {
            console.error('Error executing GraphQL query:', error);
            throw error;
        }
    }
    
    const catQuery = `
        query cats($q: String){
            CategoryFind(query: $q){
                _id
                name
            }
        }`;
    
    gql("http://shop-roles.node.ed.asmer.org.ua/graphql", catQuery, { q: "[{}]" })
        .then(result => console.log(result))
        .catch(error => console.error(error));
}

{
    function jwtDecode(token) {
        try {
            if (!token || typeof token !== 'string') {
                return undefined;
            }
            const parts = token.split('.');
            if (parts.length !== 3) {
                return undefined;
            }
            const decodedPayload = JSON.parse(atob(parts[1]));
            return decodedPayload;
        } catch (error) {
            return undefined;
        }
    }
    
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2MzIyMDVhZWI3NGUxZjVmMmVjMWEzMjAiLCJsb2dpbiI6InRlc3Q0NTciLCJhY2wiOlsiNjMyMjA1YWViNzRlMWY1ZjJlYzFhMzIwIiwidXNlciJdfSwiaWF0IjoxNjY4MjcyMTYzfQ.rxV1ki9G6LjT2IPWcqkMeTi_1K9sb3Si8vLB6UDAGdw";
    console.log(jwtDecode(token));
    
    try {
        console.log(jwtDecode());            // undefined
        console.log(jwtDecode("дічь"));      // undefined
        console.log(jwtDecode("ey.ey.ey")); // undefined
        
        console.log('до сюди допрацювало, а значить jwtDecode не матюкався в консоль червоним кольором');
    } finally {
        console.log('ДЗ, мабуть, закінчено');
    }
}