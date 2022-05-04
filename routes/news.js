const express = require('express')
const axios = require('axios')
const newsr=express.Router()
const moment = require('moment')
const math = require('math')

newsr.get('/',async(req,res)=>{
    try{
        let url = 'http://newsapi.org/v2/top-headlines?' +
        'country=id&' +
        'apiKey=5c05d868b03c41d1a5e8ffc929dd44c5';

        const news_get = await axios.get(url)
        console.log(news_get.data.articles)
        res.render('news',{
            articles: news_get.data.articles
        }, async function(err,html) {
            res.send(html)
        })
    } catch (eror) {
        if(eror.response){
            res.send('eror')
        }
    }
})

newsr.get('/bisnis',async(req,res)=>{
    try{
        let url = 'https://newsapi.org/v2/top-headlines?' +
        'country=id&' +
        'category=business&' +
        'apiKey=5c05d868b03c41d1a5e8ffc929dd44c5';

        const news_get = await axios.get(url)
        console.log(news_get.data.articles)
        res.render('news',{
            articles: news_get.data.articles
        }, async function(err,html) {
            res.send(html)
        })
    } catch (eror) {
        if(eror.response){
            res.send('eror')
        }
    }
})

newsr.get('/olahraga',async(req,res)=>{
    try{
        let url = 'https://newsapi.org/v2/top-headlines?' +
        'country=id&' +
        'category=sport&' +
        'apiKey=5c05d868b03c41d1a5e8ffc929dd44c5';

        const news_get = await axios.get(url)
        console.log(news_get.data.articles)
        res.render('news',{
            articles: news_get.data.articles
        }, async function(err,html) {
            res.send(html)
        })
    } catch (eror) {
        if(eror.response){
            res.send('eror')
        }
    }
})

newsr.get('/teknologi',async(req,res)=>{
    try{
        let url = 'https://newsapi.org/v2/top-headlines?' +
        'country=id&' +
        'category=technology&' +
        'apiKey=5c05d868b03c41d1a5e8ffc929dd44c5';

        const news_get = await axios.get(url)
        console.log(news_get.data.articles)
        res.render('news',{
            articles: news_get.data.articles
        }, async function(err,html) {
            res.send(html)
        })
    } catch (eror) {
        if(eror.response){
            res.send('eror')
        }
    }
})

newsr.get('/entertainment',async(req,res)=>{
    try{
        let url = 'https://newsapi.org/v2/top-headlines?' +
        'country=id&' +
        'category=entertainment&' +
        'apiKey=5c05d868b03c41d1a5e8ffc929dd44c5';

        const news_get = await axios.get(url)
        console.log(news_get.data.articles)
        res.render('news',{
            articles: news_get.data.articles
        }, async function(err,html) {
            res.send(html)
        })
    } catch (eror) {
        if(eror.response){
            res.send('eror')
        }
    }
})

newsr.get('/kesehatan',async(req,res)=>{
    try{
        let url = 'https://newsapi.org/v2/top-headlines?' +
        'country=id&' +
        'category=health&' +
        'apiKey=5c05d868b03c41d1a5e8ffc929dd44c5';

        const news_get = await axios.get(url)
        console.log(news_get.data.articles)
        res.render('news',{
            articles: news_get.data.articles
        }, async function(err,html) {
            res.send(html)
        })
    } catch (eror) {
        if(eror.response){
            res.send('eror')
        }
    }
})

newsr.get('/sains',async(req,res)=>{
    try{
        let url = 'https://newsapi.org/v2/top-headlines?' +
        'country=id&' +
        'category=science&' +
        'apiKey=5c05d868b03c41d1a5e8ffc929dd44c5';

        const news_get = await axios.get(url)
        console.log(news_get.data.articles)
        res.render('news',{
            articles: news_get.data.articles
        }, async function(err,html) {
            res.send(html)
        })
    } catch (eror) {
        if(eror.response){
            res.send('eror')
        }
    }
})


newsr.post('/search',async(req,res)=>{
    const search=req.body.search
    console.log(req.body.search)

    try {
        let url = `http://newsapi.org/v2/everything?q=${search}&apiKey=5c05d868b03c41d1a5e8ffc929dd44c5`

        const news_get =await axios.get(url)
        res.render('news',{
            articles:news_get.data.articles
        }, async function(err,html) {
                res.send(html)
        })
    } catch (eror) {
        if(eror.response){
            console.log(eror)
        }
    }
})

module.exports=newsr