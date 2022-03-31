
# Crypto Cafe

It's a crypto currancy's info website.

## API Reference

#### Get all coin API: 
```http
 https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false

```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | n/a |

#### Get details of a coin by ID:

```http 
  https://api.coingecko.com/api/v3/coins/${id}

```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Authors

- [@nasirahmed](https://github.com/ahmed-nasir)


## Demo

https://cryptocafe.netlify.app/

