using concorrencia.domain;
using concorrencia.repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace concorrencia.web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PrecoDistribuidoraController: ControllerBase
    {
        public readonly IConcorrenciaRepository _repo;
        public PrecoDistribuidoraController(IConcorrenciaRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            try
            {
                var results = await _repo.GetAllPrecosDistribuidora();
                return Ok(results);
            }
            catch (System.Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de Dados Falhou!!!" + ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult> Post(PrecoDistribuidora model)
        {
            try
            {
                _repo.Add(model);

                if (await _repo.SaveChangesAsync())
                {
                    return Created($"/precoDistribuidora/{model.Id}", model);
                }
            }
            catch (System.Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }

            return BadRequest();
        }

    }
}
