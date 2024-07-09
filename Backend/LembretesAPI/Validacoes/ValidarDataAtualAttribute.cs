using System.ComponentModel.DataAnnotations;

namespace LembretesAPI.Validacoes;

public class ValidacaoDataAtualAttribute : ValidationAttribute
{
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)
    {
        DateTime data = (DateTime)value;


        if (data < DateTime.Today)
        {
            return new ValidationResult(ErrorMessage);
        }

        return ValidationResult.Success;
    }
}