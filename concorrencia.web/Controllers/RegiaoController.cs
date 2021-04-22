using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using concorrencia.repository;
using concorrencia.domain;
using concorrencia.web.Custom;

namespace concorrencia.web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RegiaoController : ControllerBase
    {
        public readonly IConcorrenciaRepository _repo;
        public RegiaoController(IConcorrenciaRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            try
            {               
            var results = await _repo.GetAllRegioes();
            return Ok(results);
            }
            catch (System.Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,"Banco de Dados Falhou!!! "+ ex.Message);
            }
        }
        
        [ClaimsAuthorize("Regiao", "Incluir")]
        [HttpPost]
        public async Task<ActionResult> Post(Regiao model)
        {
            try
            {
                _repo.Add(model);

                if(await _repo.SaveChangesAsync())
                {
                    return Created($"/regiao/{model.Id}",model);
                }

            }
            catch (System.Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,ex.Message);
            }
            
            return BadRequest();
        }

        [HttpDelete("{RegiaoId}")]
        public async Task<IActionResult> Delete(int RegiaoID)
        {
            try
            {
                var regiao = await _repo.GetRegiaoById(RegiaoID);
                if (regiao == null) return NotFound();

                _repo.Delete(regiao);

                if (await _repo.SaveChangesAsync())
                {
                    return Ok();
                }
            }
            catch (System.Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco Dados Falhou: "+ ex.Message);
            }

            return BadRequest();
        }
    }
}