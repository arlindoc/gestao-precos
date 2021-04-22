using concorrencia.domain;
using concorrencia.repository;
using concorrencia.web.Custom;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace concorrencia.web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PrecoVendaController : ControllerBase
    {
        private readonly IConcorrenciaRepository _repo;
        public PrecoVendaController(IConcorrenciaRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            try
            {
                var results = await _repo.GetAllPrecos();
                return Ok(results);
            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de Dados Falhou!!!" + ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult> Post(PrecoVenda model)
        {
            try
            {
                _repo.Add(model);
                if (await _repo.SaveChangesAsync())
                {
                    return Created($"/precoVenda/{model.Id}", model);
                }
            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }

            return BadRequest();
        }

        [HttpGet("DataAtual")]
        public DateTime? DataAtual()
        {
            try
            {
                return DateTime.Now.Date;
            }
            catch (Exception)
            {
                return null;
            }

        }
    }
}
