# frozen_string_literal: true

class CardsController < ApplicationController
  skip_before_action :verify_authenticity_token

  # enable both routes:
  # - JSON for REST API
  # - HTML views for "CRUD admin views"

  def index
    @cards = Card.all

    # API only
    # render json: @cards

    respond_to do |format|
      format.html  # cards/index.html.erb
      format.json  { updated_cards }
    end
  end

  ### CRUD views routes for admin pages ###
  def new
    @card = Card.new
  end

  def edit
    @card = Card.find(params[:id])
  end
  
  def show
    @card = Card.find(params[:id])
  end
  ####################

  # REST API routes

  def create
    puts ">>>> CREATE: #{params}"

    @card = Card.new(card_params)

    if @card.save
      respond_to do |format|
        format.html  { redirect_to @card }
        format.json  { updated_cards }
      end

      # updated_cards
    else
      render json: { error: 'Create error' }
    end
  end

  def update
    puts ">>>> UPDATE: #{params}"

    @card = Card.find(params[:id])

    if @card.update(card_params)
      respond_to do |format|
        format.html  { redirect_to @card }
        format.json  { updated_cards }
      end
      # updated_cards
    else
      # render json: { error: 'Update error' }
      render json: { error: @card.errors }
    end
  end

  def destroy
    puts ">>>> DESTROY: #{params}"

    @card = Card.find(params[:id])
    @card.destroy

    respond_to do |format|
      format.html  { redirect_to cards_path }
      format.json  { updated_cards }
    end
  end

  private

  def card_params
    # TODO: strong params
    # params.require(:card).permit(:question, :answer)

    # permit all
    params.require(:card).permit!
  end

  def updated_cards
    @cards = Card.all
    render json: @cards
  end
end
