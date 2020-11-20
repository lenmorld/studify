class Card < ApplicationRecord
    enum answer_type: { open: 0, multiple: 1, true_false: 2 }

    class JsonbValidator < ActiveModel::Validator
      def validate(record)
        validate_json(record, :options) if record[:options].present?
        validate_json(record, :answers) if record[:answers].present?
      end

      private

      def validate_json(record, field)
        # byebug

        begin
            puts ">>>>>", field, record[field]
            JSON.parse(record[field].to_json)
        rescue => e
            puts "ERROR", e
            record.errors[field] << "not a valid JSON"
        end
      end
    end

    # validations
    include ActiveModel::Validations
    validates_with JsonbValidator

end
