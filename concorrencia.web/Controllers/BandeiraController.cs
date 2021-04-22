using Microsoft.AspNetCore.Mvc;
using concorrencia.repository;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using concorrencia.domain;
using Microsoft.AspNetCore.Authorization;

namespace concorrencia.web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BandeiraController : ControllerBase
    {
        public readonly IConcorrenciaRepository _repo;
        public BandeiraController(IConcorrenciaRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult> Get()
        {
            try
            {
                var results = await _repo.GetAllBandeiras();
                return Ok(results);
            }
            catch (System.Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de Dados Falhou!!! " + ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult> Post(Bandeira model)
        {
            try
            {
                _repo.Add(model);

                if (await _repo.SaveChangesAsync())
                {
                    return Created($"/bandeira/{model.Id}", model);
                }

            }
            catch (System.Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }

            return BadRequest();
        }
        [HttpDelete("{BandeiraId}")]
        public async Task<IActionResult> Delete(int BandeiraId)
        {
            try
            {
                var bandeira = await _repo.GetBandeiraById(BandeiraId);
                if (bandeira == null) return NotFound();

                _repo.Delete(bandeira);

                if (await _repo.SaveChangesAsync())
                {
                    return Ok();
                }
            }
            catch (System.Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco Dados Falhou: " + ex.Message);
            }

            return BadRequest();
        }
    }
}
