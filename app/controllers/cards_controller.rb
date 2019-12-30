class CardsController < ApplicationController

    skip_before_action :verify_authenticity_token

    def index
        @cards = Card.all
        render json: @cards
    end

    # TODO: show, new, edit for Admin page

    def create
        @card = Card.new(card_params)

        if @card.save
            @cards = Card.all
            render json: @cards
        else
            render json: { error: "Not saved" }
        end
    end

    private

        def card_params
            params.require(:card).permit(:question, :answer)
        end

end
