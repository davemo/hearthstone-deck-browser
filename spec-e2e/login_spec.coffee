require "./spec-helper"

describe "browse", ->

  Given -> @browser.navigateTo 'http://localhost:8000/#/cards'
  When  ->
    @browser.click('li.druid')
    @first_card = @browser.waitForElementVisible('div.card:nth-child(1) img[alt=Innervate]')
  Then  -> @first_card.get('alt') == 'Innervate'
